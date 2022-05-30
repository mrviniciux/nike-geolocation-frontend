import React, { createContext, useContext, useState, useEffect } from 'react';
import { listShops } from '../requests/ShopsRequest';

const ShopsContext = createContext();

export default function ShopsProvider({ children }) {
  const [shops, setShops] = useState([]);

  const getShops = async () => {
    const shopList = await listShops();
    setShops(shopList);
  };
  useEffect(() => getShops(), []);

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
