import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://linkashapii.herokuapp.com',
    // timeout: 10000,
    headers: {'content-type': 'application/json'}
  });

  export default  Axios