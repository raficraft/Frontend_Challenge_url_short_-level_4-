import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { IconCustomize } from "../../SVG/Card.js/Card";
import Card from "./Card";

describe("header component and items is rendered", () => {
  test(" Header should be rendered", () => {
    const { container } = render(
      <Card
        title="titre"
        content="content card"
        icon={<IconCustomize></IconCustomize>}
      ></Card>
    );
    expect(container).toBeInTheDocument();
  });
  test(" Header items should be rendered", () => {
    const { getByTitle, getAllByText } = render(
      <Card
        title="titre"
        content="content card"
        icon={<IconCustomize></IconCustomize>}
      ></Card>
    );
    expect(getByTitle(/logo/i)).toBeInTheDocument();
    // first link in nav
    expect(getAllByText(/features/i)[0]).toBeInTheDocument();
    expect(getAllByText(/login/i)[0]).toBeInTheDocument();
    expect(getAllByText(/Sign up/i)[0]).toBeInTheDocument();
  });
});
