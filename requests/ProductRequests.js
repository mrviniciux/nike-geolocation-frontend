import AxiosRequest from './AxiosRequest';

const endpointShow = '/items/:id';
const actions = [{ index: { method: 'GET' } }, { show: { method: 'GET' } }];

export const findProduct = (id) =>
  new AxiosRequest(endpointShow, actions, '', { id }).send('show');

