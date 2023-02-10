import axios from "axios"
import { baseURI } from './config'
export const getAllNews = async() => {
    try {   
        const sResult = await axios.get(baseURI + 'news')

        return sResult && sResult.data
    } catch (error) {
        throw new Error('Get all news error')
    }
}
export const getCoin = async(id) => {
    try {
        const param  = {
            id
        }
        const sResult = await axios.post(baseURI + 'wallets/id',param)

        return sResult && sResult.data
    } catch (error) {
        throw new Error('Get wallet error')
    }
}
export const getBrands = async() => {
    try {
        const sResult = await axios.get(baseURI + 'brands')

        return sResult && sResult.data
    } catch (error) {
        throw new Error('Get all brand')
    }
}

export const getProducts = async() => {
    try {
        const sResult = await axios.get(baseURI + 'products')
        return sResult && sResult.data
    } catch (error) {
        throw new Error('Get all products')
    }
}
export const addOrder = async(body) => {
    try {
        const sResult = await axios.post(baseURI + 'orders/add',body)
        return sResult && sResult.data
    } catch (error) {
        throw new Error('Add order')
    }
}

export const getOrders = async(body) => {
    try {
        const sResult = await axios.get(baseURI + 'orders')
        return sResult && sResult.data
    } catch (error) {
        throw new Error('Add order')
    } 
}

export const UpdateMoney = async(body) => {
    try {
        const sResult = await axios.post(baseURI + 'wallets/nap-tien',body)
        return sResult && sResult.data
    } catch (error) {
        console.log(error)
        throw new Error('charge order')
    }
}