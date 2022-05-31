/**
 * @jest-environment jsdom
 */

import React from 'react';
import Shop from '../../src/components/shops/Shops';
import { render } from '@testing-library/react';

describe('Shop rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Shop />);

    expect(result).toMatchSnapshot();
  });
});
