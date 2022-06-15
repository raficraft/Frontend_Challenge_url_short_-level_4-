import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import UrlShort from "./UrlShort";

describe("Navigation component and items is rendered", () => {
  test(" Navigation should be rendered", () => {
    const { container } = render(<UrlShort></UrlShort>);
    expect(container).toBeInTheDocument();
  });
  test("Navigation items should be rendered", () => {
    const { getByText, getByPlaceholderText } = render(<UrlShort></UrlShort>);

    expect(getByText(/shorten/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/shorten a link here.../i)).toBeInTheDocument();
  });
});
