import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DropDown from ".";

describe("DropDown component", () => {
  it("should render", () => {
    render(<DropDown />);
    const combobox = screen.getByRole("combobox");
    expect(combobox).toBeInTheDocument();
  });
});
