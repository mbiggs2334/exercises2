import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import NewTodoForm from "./NewTodoForm";

it('renders without crashing', () => {
    render(<NewTodoForm />);
});

it('matches the snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});