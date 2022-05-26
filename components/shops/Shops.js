import InputSearch from '../input/InputSearch';
import styles from './Shops.module.scss';

const Shops = () => {
  return (
    <div className={styles['shops-container']}>
      <h1>Lojas</h1>
      <div className={styles.search}>
        <InputSearch
          className={styles.input}
          type="filled"
          rightButton={true}
        />
        <br />
      </div>
    </div>
  );
};

export default Shops;
