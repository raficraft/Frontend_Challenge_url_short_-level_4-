import "@testing-library/jest-dom";
import { getByText, render } from "@testing-library/react";
import Hero from "./Hero";

describe("Navigation component and items is rendered", () => {
  test(" Navigation should be rendered", () => {
    const { container } = render(<Hero></Hero>);
    expect(container).toBeInTheDocument();
  });
  test("Navigation items should be rendered", () => {
    const { getByText } = render(<Hero></Hero>);

    expect(getByText(/features/i)).toBeInTheDocument();
    expect(getByText(/build your/i)).toBeInTheDocument();
    expect(getByText(/get started/i)).toBeInTheDocument();
  });

  test("Navigation items should be rendered", () => {
    const { getByText, getByPlaceholderText } = render(<Hero></Hero>);

    expect(getByPlaceholderText(/shorten/i)).toBeInTheDocument();
    expect(getByText(/shorten/i)).toBeInTheDocument();
  });
});
