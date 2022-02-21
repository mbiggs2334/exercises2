import React from 'react';
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';

it('should render without crashing', () => {
    render(<TodoList />);
});

it('should match snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});