/**
 * @jest-environment jsdom
 */

import React from 'react';
import InputSearch from '../../components/input/InputSearch';
import { render } from '@testing-library/react';

describe('InputSearch rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<InputSearch />);

    expect(result).toMatchSnapshot();
  });
});
