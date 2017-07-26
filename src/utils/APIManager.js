import axios from 'axios';

export default {
  get: (url, params, callback) => {
    axios
    .get(url, params)
    .then(response => {
      const confirmation = response.data.confirmation;
      if(confirmation !== 'success') {
        callback({message: response.data.message}, null);
        return;
      }
      callback(null, response.data.results);

    })
    .catch(error => {
      if (error) {
        callback(error, null);
        return;
      }
    });

  },
  post: () => {

  },
  put: () => {

  },
  delete: () => {

  }
}