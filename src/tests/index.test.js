import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Scandinavian Adventures" })
    ).toBeInTheDocument();
  });
});
