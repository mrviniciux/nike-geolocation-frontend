import InputSearch from '../input/InputSearch';
import styles from './Navbar.module.scss';
import Icon, { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => (
  <nav id="SearchNavbar" className={styles['search-navbar']}>
      <div className={styles['logo-container']}>
        <a href="/">
          <img
            className={styles['navbar-logo']}
            src="/assets/logo_nike.svg"
            alt="Nike logo"
          />
        </a>
      </div>

      <ul className={styles['menu-item-container']}>
        <li><a href="#">Lançamento</a></li>
        <li><a href="#">Masculino</a></li>
        <li><a href="#">Feminino</a></li>
        <li><a href="#">Infantil</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">SNKRS</a></li>
      </ul>

      <div className={styles['search-input']}>
        <InputSearch type="outline" />
        <img src="/assets/icon_sacola.svg" />
      </div>

  </nav>
);

export default Navbar;
