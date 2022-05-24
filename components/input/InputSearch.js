
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import styles from './InputSearch.module.scss';

const TYPES = ['outline', 'filled'];
const { Search } = Input;

const InputSearch = ({ type, rightButton, width }) => {

  if (type && !TYPES.includes(type)) {
    throw TypeError(`InputSearch type property is invalid. Must have one of the following: ${TYPES.join()}`);
  }
   
  return (
    <div className={styles['search-input-container']}>
      <Input size="large" width={width}  placeholder="Buscar" className={styles[`search-input-${type}`]} prefix={<SearchOutlined />} />
      {rightButton && <Button type="primary">Buscar</Button>}
    </div>
  );
}

export default InputSearch;
