import styles from '../../src/styles/pages/Home.module.scss';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import Shops from '../../src/components/shops/Shops';
import Newsletter from '../../src/components/newsletter/Newsletter';
import ShopListResult from '../../src/components/shops/ShopListResult';
import ShopsProvider from '../../src/context/Shops.context';

const Lojas = () => {
  return (
    <>
      <ShopsProvider>
        <Header />
        <main className={styles.main}>
          <Shops />

          <ShopListResult />

          <Newsletter />
        </main>
        <Footer />
      </ShopsProvider>
    </>
  );
};

export default Lojas;
