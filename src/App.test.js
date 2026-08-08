import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the new projects and certifications content', () => {
  render(<App />);

  expect(screen.getByText(/AksharaLens/i)).toBeInTheDocument();
  expect(screen.getByText(/BootShield/i)).toBeInTheDocument();
  expect(screen.getByText(/Software Testing Foundations/i)).toBeInTheDocument();
  expect(screen.getByText(/Microsoft Security Essentials/i)).toBeInTheDocument();
});
