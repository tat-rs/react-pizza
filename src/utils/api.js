import { BASE_URL_API } from './constants';

export { BASE_URL_API } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
    this._checkResponse = checkResponse;
  }

  getPizzas(categoryId, sortType) {
    const category = categoryId > 0 ? categoryId : '';
    const asc = sortType.asc ? 'asc' : 'desc';
    const property = sortType.property === 'name' ? 'title' : sortType.property;

    return fetch(`${this._url}?category=${category}&sortBy=${property}&order=${asc}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResponse);
  }
}

const api = new Api({
  url: BASE_URL_API,
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
