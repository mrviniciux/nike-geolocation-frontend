import InputSearch from '../input/InputSearch';
import styles from './Navbar.module.scss';
import { MenuOutlined } from '@ant-design/icons';

const Navbar = () => (
  <nav id="SearchNavbar" className={styles['search-navbar']}>
    <div className={styles['logo-container']}>
      <a href="/">
        <img
          data-testid="logo-img"
          className={styles['navbar-logo']}
          src="/assets/logo_nike.svg"
          alt="Nike logo"
        />
      </a>
    </div>

    <ul data-testid="main-menu" className={styles['menu-item-container']}>
      <li data-testid="menu-item">
        <a href="#">Lançamento</a>
      </li>
      <li data-testid="menu-item">
        <a href="#">Masculino</a>
      </li>
      <li data-testid="menu-item">
        <a href="#">Feminino</a>
      </li>
      <li data-testid="menu-item">
        <a href="#">Infantil</a>
      </li>
      <li data-testid="menu-item">
        <a href="#">Ofertas</a>
      </li>
      <li data-testid="menu-item">
        <a href="#">SNKRS</a>
      </li>
    </ul>

    <div className={styles['search-input']}>
      <InputSearch data-testid="input-search" type="outline" />
      <img data-testid="bag-icon" src="/assets/icon_sacola.svg" />
    </div>

    <div className={styles['menu-icon']}>
      <img data-testid="bag-icon" src="/assets/icon_sacola.svg" />
      <MenuOutlined data-testid="menu-icon" />
    </div>
  </nav>
);

export default Navbar;
