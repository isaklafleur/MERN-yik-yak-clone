import axios from 'axios';

export default {
  get: (url, params, callback) => {
    axios
    .get(url, params)
    .then(response => {
      const confirmation = response.data.confirmation;
      if (confirmation !== 'success') {
        callback({message: response.data.message}, null);
        return;
      }
      callback(null, response.data);

    })
    .catch(error => {
      if (error) {
        callback(error, null);
        return;
      }
    });

  },
  post: (url, body, callback) => {
    axios
    .post(url, body)
    .then((response) => {
      const confirmation = response.data.confirmation;
      if (confirmation !== 'success') {
        callback({message: response.data.message}, null);
        return;
      }
      callback(null, response.data);
    })
    .catch((error) => {
      // console.log(error)
      if (error) {
        callback(error, null);
        return;
      }
    });

  },
  put: () => {

  },
  delete: () => {

  }
}