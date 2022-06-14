import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component and items is rendered", () => {
  test("Footer should be rendered", () => {
    const { container } = render(<Footer></Footer>);
    expect(container).toBeInTheDocument();
  });
  test("Footer link should be rendered", () => {
    const { getByText, getByTitle } = render(<Footer></Footer>);

    debug();
    expect(getByTitle(/analytics/i)).toBeInTheDocument();
    expect(getByText(/support/i)).toBeInTheDocument();
    expect(getByText(/contact/i)).toBeInTheDocument();
  });

  test("Footer social icon should be rendered", () => {
    const { getByTitle } = render(<Footer></Footer>);

    debug();
    expect(getByTitle(/facebook/i)).toBeInTheDocument();
    expect(getByText(/twitter/i)).toBeInTheDocument();
    expect(getByText(/pinterest/i)).toBeInTheDocument();
    expect(getByText(/instagram/i)).toBeInTheDocument();
  });
});
