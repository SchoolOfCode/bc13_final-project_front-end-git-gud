import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./index.tsx";

describe("News feed", () => {
  it("renders a footer", () => {
    render(<Footer />);
    /* expect(screen.getByRole("footer")).toBeInTheDocument(); */ // nope
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
