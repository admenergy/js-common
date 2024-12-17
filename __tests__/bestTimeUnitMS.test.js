import { bestTimeUnitMS } from "~/common";

describe("bestTimeUnitMS", () => {
  it(`should convert to the best time possible (1100 ms -> no change)`, () => {
    expect(bestTimeUnitMS(1100)).toEqual({
      value: 1100,
      round: 1100,
      unit: "ms",
    });
  });

  it(`should convert to the best time possible (3456 ms -> 3.46 s)`, () => {
    expect(bestTimeUnitMS(3456)).toEqual({
      value: 3.456,
      round: 3.46,
      unit: "s",
    });
  });

  it(`should convert to the best time possible (10800000 ms -> 6.44 h)`, () => {
    expect(bestTimeUnitMS(10800000)).toEqual({
      value: 3,
      round: 3,
      unit: "h",
    });
  });

  it(`should throw error if ms is not a number`, () => {
    expect(() => bestTimeUnitMS("test")).toThrow(TypeError);
  });
});
