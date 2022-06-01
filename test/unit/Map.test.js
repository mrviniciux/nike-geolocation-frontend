/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MapLocationProvider from '../../src/context/MapLocation.context';
import ShopsProvider from '../../src/context/Shops.context';
import DynamicMapNike from '../../src/components/map/DynamicMapNike';

describe('Map rendering cases', () => {
  it('should just render map text loading', async () => {
    const { getByTestId } = render(
      <MapLocationProvider>
        <ShopsProvider>
          <DynamicMapNike cssAttr="desktop" />
        </ShopsProvider>
      </MapLocationProvider>
    );

    expect(getByTestId('map-loading-text')).toBeInTheDocument();
  });
});
