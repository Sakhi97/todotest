import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from './TodoTable';
import App from './App';

test('renders todotable', () => {
const row = [
{desc: 'Go to coffee', date: '24.01.2021'}
];
render(<TodoTable todos={row} />);
const tablecell = screen.getByText(/go to coffee/i);
expect(tablecell).toBeInTheDocument();
});

test('renders todotable not', () => {
  const row = [
    { desc: 'Another task', date: '24.01.2021' },
  ];

  render(<TodoTable todos={row} />);
  const tablecell = screen.queryByText(/go to coffee/i);
  expect(tablecell).not.toBeInTheDocument();
});

test('add todo/clear todos',() => {
render(<App />);
const desc = screen.getByPlaceholderText('Description');
fireEvent.change(desc, { target: { value: 'Go to coffee' } });
const date = screen.getByPlaceholderText('Date');
fireEvent.change(date, { target: { value: '29.01.2021' } })
const buttonAdd = screen.getByText('Add');
fireEvent.click(buttonAdd);
const tablecell = screen.getByText(/go to coffee/i);
expect(tablecell).toBeInTheDocument();
const buttonClear = screen.getByText('Clear todos');
fireEvent.click(buttonClear);
expect(tablecell).not.toBeInTheDocument();
  
  // Addition to the existing test
  const noTodos = screen.queryByText(/go to coffee/i);
  expect(noTodos).toBeNull();
})



