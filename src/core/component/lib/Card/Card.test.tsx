import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { IconCustomize } from "../../SVG/Card.js/Card";
import Card from "./Card";

describe("Card component and items is rendered", () => {
  test(" Card should be rendered", () => {
    const { container } = render(
      <Card
        title="titre"
        content="content card"
        icon={<IconCustomize></IconCustomize>}
      ></Card>
    );
    expect(container).toBeInTheDocument();
  });
  test(" Card items should be rendered", () => {
    const { getByTitle, getByText } = render(
      <Card
        title="titre"
        content="content card"
        icon={<IconCustomize></IconCustomize>}
      ></Card>
    );

    expect(getByText(/titre/i)).toBeInTheDocument();
    expect(getByText(/content/i)).toBeInTheDocument();
    expect(getByTitle(/customizable/i)).toBeInTheDocument();
  });
});
