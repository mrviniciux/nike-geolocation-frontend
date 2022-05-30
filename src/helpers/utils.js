const squareAB = (baseLocation, targetLocation) => {
  const latitudeCalc = Math.pow(
    targetLocation.latitude - baseLocation.latitude,
    2
  );

  const longitudeCalc = Math.pow(
    targetLocation.longitude - baseLocation.longitude,
    2
  );

  return Math.sqrt(latitudeCalc + longitudeCalc);
};

export const sortClosestShopsFrom = (basePos, shops) => {
  return shops.sort((a, b) => squareAB(basePos, a) - squareAB(basePos, b));
};

export const extractLatitudeLongitude = (string = '') => {
  const [latitude, longitude] = string.split(',');

  if (!string) return { latitude: 0, longitude: 0 };

  return {
    latitude: parseFloat(latitude || 0),
    longitude: parseFloat(longitude || 0)
  };
};
