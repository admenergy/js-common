export interface EventOptions {
  batched?: boolean;
  filters?: Record<string, any>;
}

export type EventData<T> = T & {
  stopPropagation: () => void;
};

interface EventHandler<T> {
  callback: (event: T | T[]) => any;
  filters: Record<string, any>;
  batched: boolean;
}

/**
 * Event Dispatcher
 *
 * @example
 * // Using EventDispatcher directly
 * const dispatcher = new EventDispatcher<{ foo: number }>();
 * dispatcher.on("myevent", event => console.log(event));
 * dispatcher.trigger("myevent", { foo: 42 });
 * -> { foo: 42 }
 *
 * @example
 * // Extending EventDispatcher in a custom class
 * class MyClass extends EventDispatcher<{ foo: number }> {
 *     constructor() {
 *         super();
 *         this.on("myevent", this.handleMyEvent);
 *     }
 *
 *     handleMyEvent(event: { foo: number }) {
 *         console.log('Handled in MyClass:', event);
 *     }
 * }
 * const myClass = new MyClass();
 * myClass.trigger("myevent", { foo: 42 });
 * -> { foo: 42 }
 */
export class EventDispatcher<T = any> {
  private handlers: Map<string, Set<EventHandler<T>>> = new Map();
  private batchedHandlers: Map<string, Map<EventHandler<T>, T[]>> = new Map();

  trigger(type: string, event: T = {} as T): Promise<undefined[]> {
    const handlers = this.handlers.get(type);
    if (!handlers) return Promise.resolve([]);

    const handlerPromises: Promise<undefined>[] = [];
    const stopPropagation = () => {
      handlerPromises.splice(0, handlerPromises.length);
    };
    const eventData: EventData<T> = { ...event, stopPropagation };

    handlers.forEach((handler) => {
      if (this.matchFilters(eventData, handler.filters)) {
        if (handler.batched) {
          if (!this.batchedHandlers.has(type)) {
            this.batchedHandlers.set(type, new Map());
            setTimeout(() => {
              const batchedHandlers = this.batchedHandlers.get(type);
              if (batchedHandlers) {
                batchedHandlers.forEach((events, handler) => {
                  handlerPromises.push(handler.callback(events));
                });
                this.batchedHandlers.delete(type);
              }
            });
          }
          if (!this.batchedHandlers.get(type).has(handler)) {
            this.batchedHandlers.get(type).set(handler, []);
          }
          this.batchedHandlers.get(type).get(handler).push(eventData);
        } else {
          handlerPromises.push(handler.callback(eventData));
        }
      }
    });

    return Promise.all(handlerPromises);
  }

  on(
    type: string,
    callback: (event: T) => void,
    options: EventOptions = { batched: false, filters: {} },
  ): this {
    const typeKeys = type.split(/\s+/);
    if (1 < typeKeys.length) {
      typeKeys.forEach((type) => {
        if (type) this.on(type, callback, options);
      });
      return this;
    }

    const handlers = this.handlers.get(type);
    if (!handlers) {
      this.handlers.set(type, new Set());
    }

    this.handlers.get(type).add({
      callback,
      filters: options.filters,
      batched: options.batched,
    });

    return this;
  }

  off(type: string, callback: (event: T) => void): this {
    const typeKeys = type.split(/\s+/);
    if (1 < typeKeys.length) {
      typeKeys.forEach((type) => {
        if (type) this.off(type, callback);
      });
      return this;
    }

    const handlers = this.handlers.get(type);
    if (handlers) {
      const removals: EventHandler<T>[] = [];
      handlers.forEach((handler) => {
        if (handler.callback === callback) {
          removals.push(handler);
        }
      });
      for (const handler of removals) handlers.delete(handler);
      if (!handlers.size) {
        this.handlers.delete(type);
      }
    }

    return this;
  }

  private matchFilters(event: T, filters: Record<string, any>): boolean {
    for (const key in filters) {
      const filter = filters[key];
      const value = (event as any)[key];
      if (Array.isArray(filter)) {
        if (!filter.includes(value)) {
          return false;
        }
      } else if (filter instanceof RegExp) {
        if (!filter.test(value)) {
          return false;
        }
      } else {
        if (value !== filter) {
          return false;
        }
      }
    }
    return true;
  }

  public getHandlerCount(eventName: string): number {
    return this.handlers.get(eventName)?.size ?? 0;
  }
}
