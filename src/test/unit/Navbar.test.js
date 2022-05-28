/**
 * @jest-environment jsdom
 */

import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { render } from '@testing-library/react';

describe('Navbar rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Navbar />);

    expect(result).toMatchSnapshot();
  });
});
