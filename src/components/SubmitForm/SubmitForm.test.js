import React from "react";
import { render } from "@testing-library/react";
import SubmitForm from "./SubmitForm";

describe("SubmitForm tests", () => {
  it("should render", () => {
    expect(render(<SubmitForm />)).toBeTruthy();
  });
});
