// src/pages/Home.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/pages';
import useWikipedia from '@/hooks/useWikipedia';

// Mock the `next/image` component
jest.mock('next/image', () => {
  const Image = (props) => <img {...props} alt={props.alt || 'image'} />;
  Image.displayName = 'Image';
  return Image;
});

// Mock the useWikipedia hook
jest.mock('@/hooks/useWikipedia');

describe('Home', () => {
  it('renders the loading state initially', () => {
    useWikipedia.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<Home />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders the error state when there is an error', () => {
    useWikipedia.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<Home />);
    expect(screen.getByText(/oops! something went wrong/i)).toBeInTheDocument();
  });

  it('renders the content when data is loaded', async () => {
    useWikipedia.mockReturnValue({
      data: {
        title: 'Bill Gates',
        thumbnail: { source: 'https://example.com/image.jpg' },
        extract: 'Bill Gates is a software developer and philanthropist.',
      },
      isLoading: false,
      isError: false,
    });

    render(<Home />);

    await waitFor(() => {
      const nameElements = screen.getAllByText(/bill gates/i);
      expect(nameElements.length).toBeGreaterThan(1);
      const imgElement = screen.getByAltText(/profile image/i);
      expect(imgElement).toHaveAttribute('src', 'https://example.com/image.jpg');
      expect(screen.getByText(/bill gates is a software developer and philanthropist./i)).toBeInTheDocument();
    });
  });
});
