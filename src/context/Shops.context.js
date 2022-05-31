import React, { createContext, useContext, useState } from 'react';

const ShopsContext = createContext();

export default function ShopsProvider({ children }) {
  const [shops, setShops] = useState([]);

  return (
    <ShopsContext.Provider
      value={{
        shops,
        setShops
      }}
    >
      {children}
    </ShopsContext.Provider>
  );
}

export function useShops() {
  const context = useContext(ShopsContext);
  if (!context) throw new Error('useShops must be used within a ShopsProvider');
  const { shops, setShops } = context;
  return { shops, setShops };
}
