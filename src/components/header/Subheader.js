import styles from './Subheader.module.scss';

const Subheader = () => (
  <div className={styles['subheader-container']}>
    <div className={styles.logo}>
      <img data-testid="logo-jordan" src="/assets/logo_Jordan.svg" />
      <img data-testid="logo-snkrs" src="/assets/logo_snkrs.svg" />
    </div>

    <ul data-testid="sub-menu" className={styles.links}>
      <li data-testid="sub-menu-item">
        <a href="#">Ajuda</a>
      </li>
      <li>|</li>
      <li data-testid="sub-menu-item">
        <a href="#">Acompanhe seu pedido</a>
      </li>
      <li>|</li>
      <li data-testid="sub-menu-item">
        <a href="#">Junte-se a nós</a>
      </li>
      <li>|</li>
      <li data-testid="sub-menu-item">
        <a href="#">Entrar</a>
      </li>
    </ul>
  </div>
);

export default Subheader;
