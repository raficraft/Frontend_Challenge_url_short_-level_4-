import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BannerFooter from "./BannerFooter";

describe("Navigation component and items is rendered", () => {
  test(" Navigation should be rendered", () => {
    const { container } = render(<BannerFooter></BannerFooter>);
    expect(container).toBeInTheDocument();
  });
  test("Navigation items should be rendered", () => {
    const { getByText, debug } = render(<BannerFooter></BannerFooter>);

    debug();
    expect(getByText(/boost/i)).toBeInTheDocument();
    expect(getByText(/get started/i)).toBeInTheDocument();
  });
});
