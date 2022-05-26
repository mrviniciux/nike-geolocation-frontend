import styles from './ShopListResult.module.scss';

export const PinIcon = () => (
  <img width="14px" src="/assets/icon_pin_link.svg" />
);

const ListItems = ({ list = [] }) => {
  return (
    <>
      <span>Menor distancia \/</span>
      {list.map(shop => (
        <div className={styles.card} key={shop.number}>
          <div className={styles.title}>
            <h2>{shop.name}</h2>
            <span>1,0km</span>
          </div>

          <div className={styles['view-location']}>
            <a>
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
    </>
  );
};

export default ListItems;
