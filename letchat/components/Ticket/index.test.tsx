import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Ticket from ".";

describe("Ticket", () => {
  it("renders a ticket which says 'Ticket'", () => {
    render(<Ticket openTicket={jest.fn()} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
