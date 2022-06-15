import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Footer from "./Footer";

describe("Footer component and items is rendered", () => {
  test("Footer should be rendered", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer></Footer>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
  test("Footer link should be rendered", () => {
    const { getByText, getByTitle } = render(
      <MemoryRouter>
        <Footer></Footer>
      </MemoryRouter>
    );

    expect(getByTitle(/logo/i)).toBeInTheDocument();
    expect(getByText(/analytics/i)).toBeInTheDocument();
    expect(getByText(/support/i)).toBeInTheDocument();
    expect(getByText(/contact/i)).toBeInTheDocument();
  });

  test("Footer social icon should be rendered", () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <Footer></Footer>
      </MemoryRouter>
    );

    expect(getByTitle(/facebook/i)).toBeInTheDocument();
    expect(getByTitle(/twitter/i)).toBeInTheDocument();
    expect(getByTitle(/instagram/i)).toBeInTheDocument();
    expect(getByTitle(/pinterest/i)).toBeInTheDocument();
  });
});
