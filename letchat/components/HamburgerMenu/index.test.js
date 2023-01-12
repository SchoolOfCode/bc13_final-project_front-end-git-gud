import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HamburgerMenu from "./index.tsx";


describe("Hamburger", () => {
    it("renders a burger menu", () => {
      render(<HamburgerMenu />);
      const burger = screen.getByText('I am a hamburger');
      expect(burger).toBeTruthy();
    });
  });
  