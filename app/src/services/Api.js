import axios from 'axios'
import { baseURL } from './config'

// khai bao instance = setup cho axios, base url
const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
const order = Array(10).fill(null).map((e, i) => ({
  _id: i + 1,
  img: 'https://thuonghieuvietnoitieng.com/image/cache/admin/b6e81d47956a4d244614d5ec42bb9e35a74aa7bf/Tocotoco/TRA-SUA-HOKKAIDOU-445x445.jpg',
  name: `TocoToco Milk Tea ${i + 1}`,
  price: '39,000đ',
  heart: i % 2 === 0
}))

// export const getProductList = () => axios.get('https://forever21.hungvu.net/get-products')
// export const getProductList = () => {
//   return instance.get('get-products')
// }

// https://forever21.hungvu.net/      get-products
// goi phuong thuc + phan duoi domain
export const getProductList = (params) => instance.get('/v2/menu', params)
export const getCate = (params) => instance.get('/v2/category/web', params)
export const login = (params) => instance.post('verify_mobile', params)
