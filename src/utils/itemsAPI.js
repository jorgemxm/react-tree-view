const API_URL = '/api';

/**
* Fetch All Items
* @return {Promise}
*/
export function getAll() {
  const allItemsURL = `${API_URL}/items-api.json`;

  return fetch(allItemsURL)
    .then(resp => resp.json());
}
