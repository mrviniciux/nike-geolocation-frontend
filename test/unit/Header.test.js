/**
 * @jest-environment jsdom
 */

import React from 'react';
import Header from '../../src/components/header/Header';
import { render } from '@testing-library/react';

describe('Header rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Header />);

    expect(result).toMatchSnapshot();
  });
});
