// Import from dist, rather than src:
//   import { MyComponent } from "../../dist/js/components";
//
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

describe("Test", () => {
  it("renders without crashing", () => {
    render(<b>Hi</b>);
  });

  it("should display Hi", () => {
    const { getByText } = render(<b>Hi</b>);
    expect(getByText("Hi")).toBeInTheDocument();
  });
});
