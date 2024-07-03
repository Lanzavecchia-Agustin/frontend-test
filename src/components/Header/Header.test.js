// src/components/Header/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mock the `next/image` component
jest.mock('next/image', () => {
  const Image = (props) => <img {...props} alt="Profile Image" />;
  Image.displayName = 'Image';
  return Image;
});

describe('Header', () => {
  it('renders the name correctly', () => {
    const name = 'John Doe';
    render(<Header name={name} profileImage={null} />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('renders the profile image when provided', () => {
    const name = 'John Doe';
    const profileImage = 'https://example.com/profile.jpg';
    render(<Header name={name} profileImage={profileImage} />);
    const imgElement = screen.getByAltText('Profile Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain(profileImage);
  });

  it('does not render the profile image when not provided', () => {
    const name = 'John Doe';
    render(<Header name={name} profileImage={null} />);
    expect(screen.queryByAltText('Profile Image')).not.toBeInTheDocument();
  });
});
