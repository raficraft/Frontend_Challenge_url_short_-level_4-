import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BannerFooter from "./BannerFooter";

describe("BannerFooter component and items is rendered", () => {
  test(" BannerFooter should be rendered", () => {
    const { container } = render(<BannerFooter></BannerFooter>);
    expect(container).toBeInTheDocument();
  });
  test("BannerFooter items should be rendered", () => {
    const { getByText } = render(<BannerFooter></BannerFooter>);

    expect(getByText(/boost/i)).toBeInTheDocument();
    expect(getByText(/get started/i)).toBeInTheDocument();
  });
});
