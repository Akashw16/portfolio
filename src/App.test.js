import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Header/i);  
  expect(headerElement).toBeInTheDocument();
});

test('renders the About section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/About/i);  
  expect(aboutSection).toBeInTheDocument();
});

test('renders the Projects section', () => {
  render(<App />);
  const projectsSection = screen.getByText(/Projects/i);  
  expect(projectsSection).toBeInTheDocument();
});
