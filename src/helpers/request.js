import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
// axios.defaults.withCredentials = true

export default function request(url, type, data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then((respons) => {
      if (respons.data.status === 'ok') {
        resolve(respons.data)
      } else {
        reject(respons.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  })
}

