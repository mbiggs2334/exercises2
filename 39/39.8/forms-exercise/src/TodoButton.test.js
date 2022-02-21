import React from 'react';
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import TodoButton from './TodoButton';

it('should render without crashing', () => {
    render(<TodoButton />);
});

it('should match snapshot', () => {
    const {asFragment} = render(<TodoButton />);
    expect(asFragment()).toMatchSnapshot();
});