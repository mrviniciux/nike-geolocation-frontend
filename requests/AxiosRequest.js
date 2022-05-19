import axios from 'axios';
import Flash from '../components/Flash';

const API_URL = process.env.apiUrl;

export default class AxiosRequest {
  constructor(
    strRoute,
    actions = [],
    returnName,
    objData,
    isFormData,
    objUrlFilters = {},
    sendAs
  ) {
    this._strRoute = strRoute;
    this._actions = actions;
    this._returnName = returnName;
    this._objData = objData;
    this._isFormData = isFormData;
    this._objUrlFilters = objUrlFilters;
    this._sendAs = sendAs;
  }

  send(action) {
    try {
      let requestAction = {};
      let data = {};
      let route = '';
      let config = {};

      this.actions.forEach((key) => {
        if (key[action] && key[action].method) requestAction = key[action];
      });

      if (requestAction.url) this.route = requestAction.url;

      route = this.route;

      if (!requestAction.method)
        throw new Error(`Method request not found: ${requestAction.method}`);

      if (this._isFormData) {
        const formdata = new FormData();

        if (this._objData.file) formdata.append(`file`, this._objData.file);
        if (this._objData.attachmentable_type)
          formdata.append(
            `attachmentable_type`,
            this._objData.attachmentable_type
          );
        if (this._objData.attachmentable_id)
          formdata.append(`attachmentable_id`, this._objData.attachmentable_id);

        formdata.append(`description`, this._objData.description);
        config = { headers: { 'Content-Type': 'multipart/form-data' } };

        data = formdata;
      } else {
        data[this._sendAs || this._returnName] = this._objData;
      }

      const urlPath = `${API_URL}/${route}`;
      const axiosConfig = {
        method: requestAction.method.toLowerCase(),
        url: urlPath,
        params: this._objUrlFilters,
        data,
        config,
      };

      return axios(axiosConfig)
        .then(
          (res) => {
            if (res.data.success)
              Flash.create('success', [res.data.success.message]);

            return !this._returnName ? res.data : res.data[this._returnName];
          },
          (e) => {
            switch (e.response.status) {
              case 500:
                return Flash.create('error', [
                  `${this._returnName}: Request failed with status 500. Contate o administrador do sistema`,
                ]);
              case 404:
                return Flash.create('error', [
                  `${this._returnName}: Request failed with status 404. The page doesnt exist. Contate o administrador do sistema`,
                ]);
              case 502:
                return Flash.create('error', [
                  `${this._returnName}: Request failed with status 502. Verifique sua conexão com a rede`,
                ]);
              case 503:
                return Flash.create('error', [
                  `${this._returnName}: Request failed with status 503. Contate o administrador do sistema`,
                ]);
              case 504:
                return Flash.create('error', [
                  `${this._returnName}: Request failed with status 504 timeout. Contate o administrador do sistema`,
                ]);
              default:
                return Flash.create('error', [e.response.data.error.message]);
            }
          }
        )
        .catch((error) => Flash.create('error', ['Api error: ', error]));
    } catch (e) {
      Flash.create('error', [e.message]);
      throw new Error(e);
    }
  }

  set route(path) {
    this._strRoute = path;
  }

  get route() {
    // Search all the params in the URL. They start with dotdot ":"
    const arrUrlParams = this._strRoute.match(/:\w+/gm)
      ? this._strRoute.match(/:\w+/gm).map((item) => item.replace(':', ''))
      : [];
    const params = this._objData;

    let urlWithReplacedParams = '';
    arrUrlParams.forEach((itemParam) => {
      if (params && params[itemParam]) {
        urlWithReplacedParams = this._strRoute.replace(
          `:${itemParam}`,
          params[itemParam]
        );
      }
    });

    // Cant find some param? Then remove it from URL;
    const arrUrlNotSpecifiedParams = (
      urlWithReplacedParams || this._strRoute
    ).match(/\/:\w+/gm);
    let urlWithParams = '';

    if (arrUrlNotSpecifiedParams && arrUrlNotSpecifiedParams.length > 0) {
      arrUrlNotSpecifiedParams.forEach((item) => {
        urlWithParams = (urlWithReplacedParams || this._strRoute).replace(
          item,
          ''
        );
      });
    }

    if (!urlWithReplacedParams && !urlWithParams) {
      return this._strRoute;
    }
    return urlWithReplacedParams || urlWithParams;
  }

  get actions() {
    return this._actions;
  }
}
