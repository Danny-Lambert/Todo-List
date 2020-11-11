import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList tests", () => {
  it("should render", () => {
    expect(render(<TodoList />)).toBeTruthy();
  });
});
