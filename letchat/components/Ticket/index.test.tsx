import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Ticket from ".";

describe("Ticket", () => {
  it("renders a ticket which says 'Ticket'", () => {
    render(
      <Ticket
        key={0}
        id={0}
        property_id={0}
        tenant_id={0}
        subject={""}
        message={""}
        completed={false}
        raised_by={""}
        first_name={""}
        last_name={""}
      />
    );
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
