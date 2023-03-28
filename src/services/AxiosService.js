import Axios from 'axios'
import { baseURL } from '../env'
// export const api = Axios.create({
//   baseURL,
//   timeout: 8000
// })

export const giphy = Axios.create({
  baseURL: `https://api.giphy.com/v1/gifs`,
  timeout: 8000,
  params: { api_key: `cfw7W1ZVAbNkveK94nyWdZ8J6tti8fcL` }
})

export const api = new Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 8000,
});
