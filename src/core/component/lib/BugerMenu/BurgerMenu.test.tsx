import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import BurgerMenu from "../BugerMenu/BurgerMenu";

describe("BurgerMenu component and items is rendered", () => {
  test(" BurgerMenu should be rendered", () => {
    const { container } = render(
      <MemoryRouter>
        <BurgerMenu />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
  test("BurgerMenu items should be rendered", () => {
    const { getByText, debug } = render(
      <MemoryRouter>
        <BurgerMenu isOpen={true} />
      </MemoryRouter>
    );
    expect(getByText(/features/i)).toBeInTheDocument();
    expect(getByText(/pricing/i)).toBeInTheDocument();
    expect(getByText(/ressources/i)).toBeInTheDocument();
  });
});
