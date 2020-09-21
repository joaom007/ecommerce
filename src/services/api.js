import axios from 'axios'

const api = axios.create({ baseURL: 'http://23.100.33.119:8080/ecommerce-ifsp' })

export default api
