import styles from './Pitchbar.module.scss';

const Pitchbar = () => (
  <div className={styles['pitchbar-container']}>
    <div data-testid="left-arrow-nav" className={styles['left-arrow']}>
      <img src="assets/icon_seta_esquerda.svg" />
    </div>
    <div className={styles.content}>
      <img data-testid="logo-img" src="/assets/logo_nike_snkrs.svg" />

      <span data-testid="pitch-description" className={styles.description}>
        Fique por dentro dos lançamentos{' '}
        <b>
          <u>SNKRS</u>
        </b>
      </span>
    </div>
    <div data-testid="right-arrow-nav" className={styles['right-arrow']}>
      <img src="assets/icon_seta_direita.svg" />
    </div>
  </div>
);

export default Pitchbar;
