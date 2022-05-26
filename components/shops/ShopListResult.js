
import InputSearch from '../input/InputSearch';
import ListItems from './ListItems';
import styles from './ShopListResult.module.scss';

const ShopListResult = ({list}) => {
  return (
   <div className={styles['shop-list-result-container']}>
      <div className={styles['result']}>
        <div class={styles['shops-container']}>
          <ListItems list={list} />
        </div>
        
        <div className={styles['map']}>

        </div>
      </div>
     
   </div>
  );
}

export default ShopListResult;
