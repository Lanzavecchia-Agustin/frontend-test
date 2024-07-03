import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer content correctly', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Agustin Lanzavecchia/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.linkedin.com/in/agustin-lanzavecchia-3755571a8/');
  });
});
