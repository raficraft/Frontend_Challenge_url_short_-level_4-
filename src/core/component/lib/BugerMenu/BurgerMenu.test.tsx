import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import BurgerMenu from "../BugerMenu/BurgerMenu";
import Navigation from "./BurgerMenu";

describe("Navigation component and items is rendered", () => {
  test(" Navigation should be rendered", () => {
    const { container } = render(
      <MemoryRouter>
        <BurgerMenu />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
  test("Navigation items should be rendered", () => {
    const { getByText, debug } = render(
      <MemoryRouter>
        <BurgerMenu isOpen={true} />
      </MemoryRouter>
    );

    debug();
    expect(getByText(/features/i)).toBeInTheDocument();
    expect(getByText(/pricing/i)).toBeInTheDocument();
    expect(getByText(/ressources/i)).toBeInTheDocument();
  });
});
