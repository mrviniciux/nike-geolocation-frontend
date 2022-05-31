import styles from './ShopListResult.module.scss';
import { useMapLocation } from '../../context/MapLocation.context';
import { Modal } from 'antd';
import { useState } from 'react';
import DynamicMapNike from '../map/DynamicMapNike';

export const PinIcon = () => (
  <img width="14px" src="/assets/icon_pin_link.svg" />
);

export const ArrowDownIcon = () => (
  <img width="14px" src="/assets/icon_seta_baixo.svg" />
);

const ListItems = ({ list = [] }) => {
  const [visible, setVisible] = useState(false);
  const { setMapLocation } = useMapLocation();

  const handleClick = shop => {
    setMapLocation([shop.latitude, shop.longitude]);
  };

  const showModalMap = shop => {
    setMapLocation([shop.latitude, shop.longitude]);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <span>
        Menor distancia <ArrowDownIcon />
      </span>
      {list.map(shop => (
        <div className={styles.card} key={shop.number}>
          <div className={styles.title}>
            <h2>{shop.name}</h2>
            <span>1,0km</span>
          </div>

          <div className={styles['view-location']}>
            <a className={styles.desktop} onClick={() => handleClick(shop)}>
              <PinIcon /> Ver localização
            </a>

            <a className={styles.mobile} onClick={() => showModalMap(shop)}>
              <PinIcon /> Ver localização
            </a>
          </div>

          <div className={styles['card-details']}>
            <p>BR 060- km22 – Zona Rural</p>
            <p>Atendimento: Segunda a Sábado 10h às 22h | Domingo 11h às 20h</p>
            <p className={styles.deliverable}>Disponível em 4 dias úteis</p>
          </div>
        </div>
      ))}

      <Modal
        destroyOnClose={true}
        onCancel={handleClose}
        visible={visible}
        title=""
        footer={[]}
      >
        <DynamicMapNike cssAttr="mobile" markers={list} />
      </Modal>
    </>
  );
};

export default ListItems;
