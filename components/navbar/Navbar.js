import styles from './Navbar.module.scss';

const Navbar = ({ inputPlaceholder }) => (
  <nav id="SearchNavbar" className={styles['search-navbar']}>
    <div className={styles['search-navbar__logo-container']}>
      <a href="/">
        <img
          className={styles['search-navbar__logo']}
          src="/assets/icon_nike.svg"
          alt="Nike logo"
        />
      </a>
    </div>
  </nav>
);

export default Navbar;
