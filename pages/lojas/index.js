import styles from '../../src/styles/pages/Home.module.scss';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import Shops from '../../src/components/shops/Shops';
import Newsletter from '../../src/components/newsletter/Newsletter';
import ShopListResult from '../../src/components/shops/ShopListResult';
import ShopsProvider from '../../src/context/Shops.context';
import MapLocationProvider from '../../src/context/MapLocation.context';

const Lojas = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MapLocationProvider>
          <ShopsProvider>
            <Shops />

            <ShopListResult />

            <Newsletter />
          </ShopsProvider>
        </MapLocationProvider>
      </main>
      <Footer />
    </>
  );
};

export default Lojas;
