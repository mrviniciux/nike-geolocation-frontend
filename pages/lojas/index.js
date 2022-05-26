import styles from '../../styles/pages/Home.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Shops from '../../components/shops/Shops';
import Newsletter from '../../components/newsletter/Newsletter';
import { listShops } from '../../requests/ShopsRequest';
import { useState, useEffect } from 'react';
import ShopListResult from '../../components/shops/ShopListResult';

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
        <Shops />

        <ShopListResult list={shops} />
        
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

 export default Lojas;