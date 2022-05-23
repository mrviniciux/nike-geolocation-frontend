
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styles from './InputSearch.module.scss';

const TYPES = ['outline', 'filled'];
const { Search } = Input;

const InputSearch = ({ type }) => {

  if (type && !TYPES.includes(type)) {
    throw TypeError(`InputSearch type property is invalid. Must have one of the following: ${TYPES.join()}`);
  }
   
  return (
    <Input size="large" placeholder="Buscar" className={styles[`search-input-${type}`]} prefix={<SearchOutlined />} />
  );
}

export default InputSearch;
