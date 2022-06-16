import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LinkGenerateByApi from "./LinkGenerateByApi";

describe("LinkGenerateApi component and items is rendered", () => {
  test("LinkGenerateApi should be rendered", () => {
    const { container } = render(<LinkGenerateByApi></LinkGenerateByApi>);
    expect(container).toBeInTheDocument();
  });
});
