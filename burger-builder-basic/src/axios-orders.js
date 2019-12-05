import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-2e30a.firebaseio.com/'
})

export default instance;