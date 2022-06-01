import React from 'react';
import dynamic from 'next/dynamic';
import { useShops } from '../../context/Shops.context';
import { useMapLocation } from '../../context/MapLocation.context';

function DynamicMapNike({ cssAttr }) {
  const { shops } = useShops();
  const { mapLocation } = useMapLocation();
  const Map = React.useMemo(
    () =>
      dynamic(() => import('./Map.js'), {
        loading: () => (
          <span data-testid="map-loading-text">Carregando mapa... </span>
        ),
        ssr: false
      }),
    [shops, mapLocation]
  );
  return <Map markers={shops} cssAttr={cssAttr} />;
}

export default DynamicMapNike;
