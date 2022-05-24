
import InputSearch from '../input/InputSearch';
import styles from './Shops.module.scss';

const Shops = () => {
  return (
   <div className={styles['shops-container']}>
       <h1>Lojas</h1>
       <div className={styles['search']}>
            <InputSearch type="filled" rightButton={true}  />
       </div>
   </div>
  );
}

export default Shops;
