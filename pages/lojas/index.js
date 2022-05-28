import styles from '../../src/styles/pages/Home.module.scss';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import Shops from '../../src/components/shops/Shops';
import Newsletter from '../../src/components/newsletter/Newsletter';
import { listShops } from '../../src/requests/ShopsRequest';
import { useState, useEffect } from 'react';
import ShopListResult from '../../src/components/shops/ShopListResult';

const Lojas = () => {
  const [shops, setShops] = useState([]);
  const getShops = async () => {
    const results = await listShops();
    return setShops(results);
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Shops list={shops} />

        <ShopListResult list={shops} />

        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Lojas;
