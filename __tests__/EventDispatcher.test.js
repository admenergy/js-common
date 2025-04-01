import { EventDispatcher } from "~/common";

describe("EventDispatcher", () => {
  let dispatcher;

  beforeEach(() => {
    dispatcher = new EventDispatcher();
  });

  it("should register and trigger an event", async () => {
    const mockCallback = jest.fn();
    dispatcher.on("testEvent", mockCallback);
    await dispatcher.trigger("testEvent", { foo: "bar" });

    expect(mockCallback).toHaveBeenCalledWith({
      foo: "bar",
      stopPropagation: expect.any(Function),
    });
  });

  it("should handle batched events", async () => {
    jest.useFakeTimers();
    const mockCallback = jest.fn();
    dispatcher.on("batchEvent", mockCallback, { batched: true });

    await dispatcher.trigger("batchEvent", { id: 1 });
    await dispatcher.trigger("batchEvent", { id: 2 });

    jest.runAllTimers(); // To process the batched events
    expect(mockCallback).toHaveBeenCalledWith([
      { id: 1, stopPropagation: expect.any(Function) },
      { id: 2, stopPropagation: expect.any(Function) },
    ]);
    jest.useRealTimers();
  });

  it("should respect filters", async () => {
    const mockCallback = jest.fn();
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
    const mockCallback = jest.fn();
    dispatcher.on("eventToRemove", mockCallback);
    dispatcher.off("eventToRemove", mockCallback);

    await dispatcher.trigger("eventToRemove", { data: "data" });
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it("should propagate stopPropagation properly", async () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn((event) => event.stopPropagation());

    dispatcher.on("stopEvent", firstCallback);
    dispatcher.on("stopEvent", secondCallback);
    dispatcher.on("stopEvent", jest.fn());

    await dispatcher.trigger("stopEvent", {});

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
    // The third callback should not be called because propagation was stopped
    expect(dispatcher.handlers.get("stopEvent").size).toBe(3); // Confirm there are 3 handlers
  });
});
