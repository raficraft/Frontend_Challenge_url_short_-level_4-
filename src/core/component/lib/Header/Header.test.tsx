import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("header component and items is rendered", () => {
    test(" Header should be rendered", () => {
        const { container } = render(<Header></Header>);
        expect(container).toBeInTheDocument();
    });
    test(" Header items should be rendered", () => {

        const { getByTitle, getByText } = render(<Header></Header>);
        expect(getByTitle(/logo/i)).toBeInTheDocument();
        // first link in nav
        expect(getByText(/features/i)).toBeInTheDocument();
        expect(getByTitle(/login/i)).toBeInTheDocument();
        expect(getByTitle(/Signup/i)).toBeInTheDocument();

    });
})