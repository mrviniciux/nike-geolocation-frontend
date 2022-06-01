/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import Shops from '../../src/components/shops/Shops';
import { render, waitFor } from '@testing-library/react';
import MapLocationProvider from '../../src/context/MapLocation.context';
import ShopsProvider from '../../src/context/Shops.context';
import userEvent from '@testing-library/user-event';
import ShopListResult from '../../src/components/shops/ShopListResult';

describe('Shop rendering tests/snapshot', () => {
  it('should have text input available with search button', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <MapLocationProvider>
        <ShopsProvider>
          <Shops />
        </ShopsProvider>
      </MapLocationProvider>
    );

    expect(getByPlaceholderText('Buscar')).toBeInTheDocument();
    expect(getByTestId('button-search')).toBeInTheDocument();
  });

  it('should render shops list', async () => {
    const {
      getByTestId,
      getByPlaceholderText,
      queryByTestId,
      queryAllByTestId
    } = render(
      <MapLocationProvider>
        <ShopsProvider>
          <Shops />
          <ShopListResult />
        </ShopsProvider>
      </MapLocationProvider>
    );

    const input = getByPlaceholderText('Buscar');
    const btn = getByTestId('button-search');

    userEvent.type(input, '40,40');
    userEvent.click(btn);

    await waitFor(() =>
      expect(queryByTestId('shops-list')).toBeInTheDocument()
    );

    expect(queryAllByTestId('shops-list--item')).toHaveLength(3);
  });
});
