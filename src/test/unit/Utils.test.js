/**
 * @jest-environment jsdom
 */

import '../matchMedia.mock.js';
import { sortClosestShopsFrom } from '../../helpers/utils';

const storeList = [
  {
    latitude: '-37.81411',
    longitude: '144.96328',
    name: 'Shop 1',
    address: 'Shop 1 address',
    phone: '0123456789',
    distance: '0.1'
  },
  {
    latitude: '55.81411',
    longitude: '80.96328',
    name: 'Shop 2',
    address: 'Shop 2 address',
    phone: '0123456789',
    distance: '0.1'
  },
  {
    latitude: '-37.81411',
    longitude: '144.96328',
    name: 'Shop 3',
    address: 'Shop 3 address',
    phone: '0123456789',
    distance: '0.1'
  },
  {
    latitude: '-37.81411',
    longitude: '144.96328',
    name: 'Shop 4',
    address: 'Shop 4 address',
    phone: '0123456789',
    distance: '0.1'
  }
];

describe('Assert all utilitary functions', () => {
  it('should sort store list from the closest', () => {
    const basepos = { latitude: 54, longitude: 80 };
    const sortedList = sortClosestShopsFrom(basepos, storeList);

    expect(sortedList[0].name).toBe('Shop 2');
  });
});
