import { Button } from 'antd';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <section className={styles['shops-container']}>
      <div className={styles.content}>
        <img data-testid="logo-img" src="/assets/logo_nike.svg" />
        <h2 data-testid="newsletter-title" className={styles.title}>
          RECEBA AS NOVIDADES DA NIKE
        </h2>
        <p data-testid="newsletter-description" className={styles.caption}>
          Cadastre-se e seja um dos primeiros a saber de todas as novidades e
          ofertas
        </p>

        <Button data-testid="newsletter-button-cta" type="primary">
          Cadastre-se
        </Button>
      </div>
    </section>
  );
};

export default Newsletter;
