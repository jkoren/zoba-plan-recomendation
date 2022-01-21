import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the title of the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/zoba frontend trip planner/i);
  expect(linkElement).toBeInTheDocument();
});
