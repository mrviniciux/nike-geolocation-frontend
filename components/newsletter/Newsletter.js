
import { Button } from 'antd';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  return (
   <section className={styles['shops-container']}>
       <div className={styles['content']}>
            <img src="/assets/logo_nike.svg" />
            <h2 className={styles['title']}>RECEBA AS NOVIDADES DA NIKE</h2>
            <p className={styles['caption']}>Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas</p>
            
            <Button type="primary">Cadastre-se</Button>
       </div>
    
   </section>
  );
}

export default Newsletter;
