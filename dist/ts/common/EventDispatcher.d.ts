export interface EventOptions {
    batched?: boolean;
    filters?: Record<string, any>;
}
export type EventData<T> = T & {
    stopPropagation: () => void;
};
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
export declare class EventDispatcher<T = any> {
    private handlers;
    private batchedHandlers;
    trigger(type: string, event?: T): Promise<void[]>;
    on(type: string, callback: (event: T) => void, options?: EventOptions): this;
    off(type: string, callback: (event: T) => void): this;
    private matchFilters;
    getHandlerCount(eventName: string): number;
}
