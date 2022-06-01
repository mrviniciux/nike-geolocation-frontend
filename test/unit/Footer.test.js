/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '../matchMedia.mock.js';
import React from 'react';
import Footer from '../../src/components/footer/Footer';
import { render } from '@testing-library/react';

describe('Footer rendering tests', () => {
  it('should have main links', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer-main-links')).toBeInTheDocument();
  });

  it('should have caption links', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer-caption-links')).toBeInTheDocument();
  });

  it('should have about nike links', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer-about-nike-links')).toBeInTheDocument();
  });

  it('must have all payment options as described', () => {
    const { getAllByTestId } = render(<Footer />);

    expect(getAllByTestId('payment-option')).toHaveLength(6);
  });

  it('must have all social media icons as described', () => {
    const { getAllByTestId } = render(<Footer />);

    expect(getAllByTestId('social-media')).toHaveLength(3);
  });
});
