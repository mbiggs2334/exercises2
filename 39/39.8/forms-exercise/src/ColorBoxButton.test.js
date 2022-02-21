import React from 'react';
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import ColorBoxButton from './ColorBoxButton';

it('should render without crashing', () => {
    render(<ColorBoxButton />);
});

it('should match snapshot', () => {
    const {asFragment} = render(<ColorBoxButton />);
    expect(asFragment()).toMatchSnapshot();
});