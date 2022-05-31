import ListItems from './ListItems';
import styles from './ShopListResult.module.scss';
import { Skeleton } from 'antd';
import DynamicMapNike from '../map/DynamicMapNike';
import { useShops } from '../../context/Shops.context';

const ShopListResult = () => {
  const { shops } = useShops();
  return (
    <>
      {shops.length > 0 && (
        <div className={styles['shop-list-result-container']}>
          <div className={styles.result}>
            <div className={styles.shops}>
              <div className={styles['card-container']}>
                <Skeleton loading={shops.length === 0}>
                  <ListItems list={shops} />
                </Skeleton>
              </div>
            </div>

            <div className={styles.map}>
              <DynamicMapNike markers={shops} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopListResult;
