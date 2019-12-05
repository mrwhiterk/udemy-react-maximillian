import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'

// sets this header only on posts requests
axios.defaults.headers.post['Content-Type'] = 'application/json'

// let requestInterceptor =
axios.interceptors.request.use(
  request => {
    console.log('req ->', request)
    // edit request config
    return request
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

// to remove -> axios.interceptors.request.eject(requestInterceptor)

axios.interceptors.response.use(
  response => {
    console.log('res ->', response)
    // edit request config
    return response
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
