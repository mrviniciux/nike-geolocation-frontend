/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/navbar/Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Navbar />);

    expect(result).toMatchSnapshot();
  });
});
