import axios from 'axios'

function getDataViaApi (path, cb, errorHandler) {
  axios.get(path)
    .then((res) => {
      cb(res)
    }).catch((error) => {
      errorHandler(error)
    })
}
export default {
  getUsers (cb, errorHandler) {
    const path = 'https://jsonplaceholder.typicode.com/users'
    getDataViaApi(path, cb, errorHandler)
  }
}
