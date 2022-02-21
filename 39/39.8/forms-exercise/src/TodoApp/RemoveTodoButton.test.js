import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import RemoveTodoButton from "./RemoveTodoButton";

it('renders without crashing', () => {
    render(<RemoveTodoButton />);
});

it('matches the snapshot', () => {
    const { asFragment } = render( <RemoveTodoButton />);
    expect(asFragment()).toMatchSnapshot();
});