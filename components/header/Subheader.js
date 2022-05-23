import styles from './Subheader.module.scss';

const Subheader = () => (
    <div className={styles['subheader-container']}>
        <div className={styles['logo']}>
            <img src="/assets/logo_Jordan.svg" />
            <img src="/assets/logo_snkrs.svg" />
        </div>

        <ul className={styles['links']}>
            <li><a href="#">Ajuda</a></li>
            <li>|</li>
            <li><a href="#">Acompanhe seu pedido</a></li>
            <li>|</li>
            <li><a href="#">Junte-se a nós</a></li>
            <li>|</li>
            <li><a href="#">Entrar</a></li>
        </ul>
    </div>
);

export default Subheader;
