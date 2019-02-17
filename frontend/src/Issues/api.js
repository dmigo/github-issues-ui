import axios from 'axios'

const baseUri = ''

const toUIObjects = item => {
  return {
  }
}

export default {
  find: parameters =>
    axios
      .get(`${baseUri}/issues`, {
        params: parameters
      })
      .then(response => response.data.map(toUIObjects))
      .catch(error => {
        throw error.response.data
          ? error.response.data
          : { type: 'Error', message: error.message }
      })
}
