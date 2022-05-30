import InputSearch from '../input/InputSearch';
import styles from './Shops.module.scss';
import { useShops } from '../../context/Shops.context';
import {
  extractLatitudeLongitude,
  sortClosestShopsFrom
} from '../../helpers/utils';

const Shops = () => {
  const { shops, setShops } = useShops();
  const filterShops = (event, search) => {
    const basePos = extractLatitudeLongitude(search);
    const sortedShops = sortClosestShopsFrom(basePos, shops);

    setShops(sortedShops);
  };

  return (
    <div className={styles['search-shop-container']}>
      <h1>Lojas</h1>
      <div className={styles.search}>
        <InputSearch
          className={styles.input}
          helper={`Formato deve estar em: 99.999, 99.999`}
          type="filled"
          clickButton={filterShops}
          rightButton={true}
        />
        <br />
      </div>
    </div>
  );
};

export default Shops;
