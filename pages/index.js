import { Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import styles from '../styles/pages/Home.module.scss';
import Header from '../components/header/Header';

const { Title } = Typography;


export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section id="nice-presentation" className={styles.welcome}>
          teste sbfasdfs
        </section>
      </main>
    </>
  );
}





