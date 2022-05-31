import React, { createContext, useContext, useState } from 'react';

const MapLocationContext = createContext();

export default function MapLocationProvider({ children }) {
  const [mapLocation, setMapLocation] = useState([-23.5477, -46.636]);

  return (
    <MapLocationContext.Provider
      value={{
        mapLocation,
        setMapLocation
      }}
    >
      {children}
    </MapLocationContext.Provider>
  );
}

export function useMapLocation() {
  const context = useContext(MapLocationContext);
  if (!context)
    throw new Error('useMapLocation must be used within a MapLocationProvider');
  const { mapLocation, setMapLocation } = context;
  return { mapLocation, setMapLocation };
}
