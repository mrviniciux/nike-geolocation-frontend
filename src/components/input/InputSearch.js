import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import styles from './InputSearch.module.scss';
import { useState } from 'react';

const TYPES = ['outline', 'filled'];

const maskLatLong = value => {
  return value
    .replace(/[^+\d-,.]+/, '')
    .replace(/(([+-]?([0-9]*[.])?[0-9]+){5})(\d{3})/, '$1,$2')
    .replace(/(([+-]?([0-9]*[.])?[0-9]+){5})(\d)/, '$1');
};

const InputSearch = ({ type, rightButton, width, helper, clickButton }) => {
  const [search, setSearch] = useState('');

  const handleKeydown = e => {
    if (e.keyCode === 13 && typeof clickButton === 'function') {
      clickButton(e, search);
    }
  };

  if (type && !TYPES.includes(type)) {
    throw TypeError(
      `InputSearch type property is invalid. Must have one of the following: ${TYPES.join()}`
    );
  }

  return (
    <>
      <div className={styles['search-input-container']}>
        <Input
          size="large"
          width={width}
          value={search}
          onKeyDown={handleKeydown}
          onChange={e => setSearch(maskLatLong(e.target.value))}
          placeholder="Buscar"
          data-testid="input-search"
          className={styles[`search-input-${type}`]}
          prefix={<SearchOutlined />}
        />
        {rightButton && (
          <Button data-testid="button-search" onClick={event => clickButton(event, search)} type="primary">
            Buscar
          </Button>
        )}
      </div>
      {helper && <span className="caption-text">{helper}</span>}
    </>
  );
};

export default InputSearch;
