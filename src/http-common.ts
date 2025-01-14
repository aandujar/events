import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://app.ticketmaster.com',
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    apikey: 'wF77kw87Mv0AmThAjgVAUal0iHblWbaD'
  }
})

export default apiClient