import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Header/i);  // Update this text if you have specific content in Header component
  expect(headerElement).toBeInTheDocument();
});

test('renders the About section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/About/i);  // Replace with actual text from About component
  expect(aboutSection).toBeInTheDocument();
});

test('renders the Projects section', () => {
  render(<App />);
  const projectsSection = screen.getByText(/Projects/i);  // Replace with actual text from Projects component
  expect(projectsSection).toBeInTheDocument();
});
