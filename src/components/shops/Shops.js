import InputSearch from '../input/InputSearch';
import styles from './Shops.module.scss';
import { useShops } from '../../context/Shops.context';
import {
  extractLatitudeLongitude,
  sortClosestShopsFrom
} from '../../helpers/utils';
import { listShops } from '../../requests/ShopsRequest';
import { useMapLocation } from '../../context/MapLocation.context';

const Shops = () => {
  const { setMapLocation } = useMapLocation();
  const { setShops } = useShops();

  const filterShops = async (event, search) => {
    const shopList = await listShops();
    const basePos = extractLatitudeLongitude(search);
    const sortedShops = sortClosestShopsFrom(basePos, shopList).slice(0, 3);

    setMapLocation([sortedShops[0].latitude, sortedShops[0].longitude]);
    setShops(sortedShops);
  };

  return (
    <div className={styles['search-shop-container']}>
      <h1>Lojas</h1>
      <div className={styles.search}>
        <InputSearch
          className={styles.input}
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
