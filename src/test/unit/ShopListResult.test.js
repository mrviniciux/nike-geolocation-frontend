/**
 * @jest-environment jsdom
 */

import React from 'react';
import ShopListResult from '../../components/shops/ShopListResult';
import { render } from '@testing-library/react';

describe('ShopListResult rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<ShopListResult />);

    expect(result).toMatchSnapshot();
  });
});
