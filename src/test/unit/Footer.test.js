/**
 * @jest-environment jsdom
 */

import '../matchMedia.mock.js';
import React from 'react';
import Footer from '../../components/footer/Footer';
import { render } from '@testing-library/react';

describe('Footer rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Footer />);

    expect(result).toMatchSnapshot();
  });
});
