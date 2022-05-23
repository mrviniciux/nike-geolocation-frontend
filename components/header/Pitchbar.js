import styles from './Pitchbar.module.scss';

const Pitchbar = () => (
    <div className={styles['pitchbar-container']}>
        <div className={styles['left-arrow']}>
            <img src="assets/icon_seta_esquerda.svg" />
        </div>
        <div className={styles['content']}>
            <img src="/assets/logo_nike_snkrs.svg" />

            <span className={styles['description']}>
                Fique por dentro dos lançamentos <b><u>SNKRS</u></b>
            </span>
        </div>
        <div className={styles['right-arrow']}>
            <img src="assets/icon_seta_direita.svg" />
        </div>
    </div>
);

export default Pitchbar;
