import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import BurgerMenu from "../BugerMenu/BurgerMenu";
import Navigation from "./Navigation";

describe("Navigation component and items is rendered", () => {
  test(" Navigation should be rendered", () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
  test("Navigation items should be rendered", () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <Navigation></Navigation>
      </MemoryRouter>
    );

    expect(getAllByText(/features/i)[0]).toBeInTheDocument();
    expect(getAllByText(/pricing/i)[0]).toBeInTheDocument();
    expect(getAllByText(/ressources/i)[0]).toBeInTheDocument();
  });
});
