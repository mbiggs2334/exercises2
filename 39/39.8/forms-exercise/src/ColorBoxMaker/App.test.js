import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('render without crashing', () => {
    render(<App />);
});

it('matches snapshot', () => {
    const { asFragment } = render (<App />);
    expect(asFragment()).toMatchSnapshot();
});

it('shows the headers', () => {
    const { queryByText } = render(<App />);

    expect(queryByText("Make some colored boxes!")).toBeInTheDocument();
});

