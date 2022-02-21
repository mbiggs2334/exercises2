import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TodoApp from "./TodoApp";

it('renders without crashing', () => {
    render(<TodoApp />);
});

it('matches the snapshot', () => {
    const { asFragment } = render( <TodoApp />);
    expect(asFragment()).toMatchSnapshot();
});


it('should contain headers', () => {
    const { queryByText } = render(<TodoApp />);

    expect(queryByText("Make a nice TodoList")).toBeInTheDocument();
});

it('should add/remove a todo', () => {
    const { queryByText, queryByLabelText } = render(<TodoApp />);

    expect(queryByText('test app')).not.toBeInTheDocument();

    const input = queryByLabelText("Todo:");
    const button = queryByText('Add Todo');
    fireEvent.change(input, {target: {value: 'test app'}});
    fireEvent.click(button);

    expect(queryByText('test app')).toBeInTheDocument();

    const removeButton = queryByText('X');
    fireEvent.click(removeButton);
    expect(queryByText('test app')).not.toBeInTheDocument();
});