import AxiosRequest from './AxiosRequest';

const endpointShow = '/stores';
const actions = [{ index: { method: 'GET' } }];

export const listShops = () =>
  new AxiosRequest(endpointShow, actions, '').send('index');
