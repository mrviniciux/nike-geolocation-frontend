import { Icon } from 'leaflet';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.scss';
import { Skeleton } from 'antd';
import { useMapLocation } from '../../context/MapLocation.context';

const iconPinMap = new Icon({
  iconUrl: '/assets/icon_pin_mapa.svg',
  iconSize: [32, 32]
});

const Map = ({ markers }) => {
  const { mapLocation } = useMapLocation();

  return (
    <section className={styles['map-section']}>
      <Skeleton loading={markers.length === 0}>
        <MapContainer
          center={mapLocation}
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: 400, width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.length &&
            markers.map(marker => (
              <Marker
                position={[marker.latitude, marker.longitude]}
                key={marker.number}
                icon={iconPinMap}
              >
                <Popup>
                  <p>
                    Loja: <b>{marker.name}</b>
                  </p>
                  <p>Endereço: {marker.adress}</p>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </Skeleton>
    </section>
  );
};

export default Map;
