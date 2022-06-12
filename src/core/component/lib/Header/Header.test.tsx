import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";
import "../../../../../mocks/matchMedia.mock";
import Navigation from "../Navigation/Navigation";

describe("header component and items is rendered", () => {
  test(" Header should be rendered", () => {
    const { container } = render(
      <MemoryRouter>
        <Header></Header>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
  test(" Header items should be rendered", () => {
    const { getByTitle, getAllByText } = render(
      <MemoryRouter>
        <Header>
          <Navigation></Navigation>
        </Header>
      </MemoryRouter>
    );
    expect(getByTitle(/logo/i)).toBeInTheDocument();
    // first link in nav
    expect(getAllByText(/features/i)[0]).toBeInTheDocument();
    expect(getAllByText(/login/i)[0]).toBeInTheDocument();
    expect(getAllByText(/Sign up/i)[0]).toBeInTheDocument();
  });
});
