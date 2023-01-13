import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NewsFeed from "./index.tsx";

describe("News feed", () => {
  it("renders a news feed which says 'News Feed'", () => {
    render(<NewsFeed />);
    expect(screen.getByText("News Feed")).toBeInTheDocument();
  });
});
