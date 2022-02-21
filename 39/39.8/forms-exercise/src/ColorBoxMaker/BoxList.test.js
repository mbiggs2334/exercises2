import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BoxList from './BoxList';

it('renders without crashing', () => {
    render(<BoxList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('shows added boxes', () => {
    const { queryByTestId, queryByText } = render(<BoxList />);

    const heightInput = queryByTestId('height-input');
    const widthInput = queryByTestId('width-input');
    const colorInput = queryByTestId('color-input');
    const submitButton = queryByText('Add Box');

    fireEvent.change(heightInput, {target: {value: 25}})
    fireEvent.change(widthInput, {target: {value: 25}})
    fireEvent.change(colorInput, {target: {value: '#000000'}})
    fireEvent.click(submitButton);

    expect(queryByTestId('#000000')).toBeInTheDocument();

})