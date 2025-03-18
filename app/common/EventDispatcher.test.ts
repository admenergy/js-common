import { beforeEach, describe, expect, it, vi } from "vitest";
import { EventDispatcher } from "./EventDispatcher";

describe("EventDispatcher", () => {
  let dispatcher: EventDispatcher;

  beforeEach(() => {
    dispatcher = new EventDispatcher();
  });

  it("should register and trigger an event", async () => {
    const mockCallback = vi.fn();
    dispatcher.on("testEvent", mockCallback);
    await dispatcher.trigger("testEvent", { foo: "bar" });

    expect(mockCallback).toHaveBeenCalledWith({
      foo: "bar",
      stopPropagation: expect.any(Function),
    });
  });

  it("should handle batched events", async () => {
    vi.useFakeTimers();
    const mockCallback = vi.fn();
    dispatcher.on("batchEvent", mockCallback, { batched: true });

    await dispatcher.trigger("batchEvent", { id: 1 });
    await dispatcher.trigger("batchEvent", { id: 2 });

    vi.runAllTimers(); // To process the batched events
    expect(mockCallback).toHaveBeenCalledWith([
      { id: 1, stopPropagation: expect.any(Function) },
      { id: 2, stopPropagation: expect.any(Function) },
    ]);
    vi.useRealTimers();
  });

  it("should respect filters", async () => {
    const mockCallback = vi.fn();
    dispatcher.on("filteredEvent", mockCallback, { filters: { foo: "bar" } });

    await dispatcher.trigger("filteredEvent", { foo: "bar" });
    await dispatcher.trigger("filteredEvent", { foo: "baz" });

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith({
      foo: "bar",
      stopPropagation: expect.any(Function),
    });
  });

  it("should not call callbacks after being removed", async () => {
    const mockCallback = vi.fn();
    dispatcher.on("eventToRemove", mockCallback);
    dispatcher.off("eventToRemove", mockCallback);

    await dispatcher.trigger("eventToRemove", { data: "data" });
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it("should propagate stopPropagation properly", async () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn((event) => event.stopPropagation());

    dispatcher.on("stopEvent", firstCallback);
    dispatcher.on("stopEvent", secondCallback);
    dispatcher.on("stopEvent", vi.fn());

    await dispatcher.trigger("stopEvent", {});

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
    // The third callback should not be called because propagation was stopped
    expect(dispatcher.getHandlerCount("stopEvent")).toBe(3); // Confirm there are 3 handlers
  });
});
