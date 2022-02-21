import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Todo from './Todo';

it('renders without crashing', () => {
    render(<Todo />);
});

it('matches the snapshot', () => {
    const { asFragment } = render( <Todo />);
    expect(asFragment()).toMatchSnapshot();
});