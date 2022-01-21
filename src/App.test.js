import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Zoba title', () => {
  render(<App />);
  const linkElement = screen.getByText(/zoba frontend trip planner/i);
  expect(linkElement).toBeInTheDocument();
});
