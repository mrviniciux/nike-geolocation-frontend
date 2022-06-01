/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import Newsletter from '../../src/components/newsletter/Newsletter';
import { render } from '@testing-library/react';

describe('Newsletter rendering elements', () => {
  it('should have nike logo as described on mocks', () => {
    const { getByTestId } = render(<Newsletter />);

    expect(getByTestId('logo-img')).toHaveAttribute(
      'src',
      '/assets/logo_nike.svg'
    );
  });

  it('should have title, description and button cta', () => {
    const { getByTestId } = render(<Newsletter />);

    expect(getByTestId('newsletter-title')).toBeInTheDocument();
    expect(getByTestId('newsletter-description')).toBeInTheDocument();
    expect(getByTestId('newsletter-button-cta')).toBeInTheDocument();
  });
});
