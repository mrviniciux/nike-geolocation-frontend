import React from 'react';
import dynamic from 'next/dynamic';
import { useShops } from '../../context/Shops.context';
import { useMapLocation } from '../../context/MapLocation.context';

function DynamicMapNike() {
  const { shops } = useShops();
  const { mapLocation } = useMapLocation();
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import('./Map.js'), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false // This line is important. It's what prevents server-side render
        }
      ),
    [shops, mapLocation]
  );
  return <Map markers={shops} />;
}

export default DynamicMapNike;
