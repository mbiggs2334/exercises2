import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import NewBoxForm from "./NewBoxForm";

it('renders without crashing', () => {
    render(<NewBoxForm />);
});

it('matches the snapshot', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});