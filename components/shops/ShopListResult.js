import ListItems from './ListItems';
import styles from './ShopListResult.module.scss';
import { Skeleton } from 'antd';
import DynamicMapNike from '../Map/DynamicMapNike';

const ShopListResult = ({ list = [] }) => {
  return (
    <div className={styles['shop-list-result-container']}>
      <div className={styles.result}>
        <div className={styles.shops}>
          <div className={styles['card-container']}>
            <Skeleton loading={list.length === 0}>
              <ListItems list={list} />
            </Skeleton>
          </div>
        </div>

        <div className={styles.map}>
          <DynamicMapNike />
        </div>
      </div>
    </div>
  );
};

export default ShopListResult;
