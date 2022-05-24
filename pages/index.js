import { Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import styles from '../styles/pages/Home.module.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Shops from '../components/shops/Shops';
import Newsletter from '../components/newsletter/Newsletter';

const { Title } = Typography;


export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Shops />

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}





