const BrandService = require('../services/brand.service')

const GetAll = async(req,res,next) => {
    try {
        const brands = await BrandService.GetAll()
        return res.status(200).json({
            success: true,
            brands
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            brands: []
        })
    }
}

const GetById = async(req,res,next) => {
    try {
        const {id} = req.body
        const brand = await BrandService.GetById(id)
        return res.status(200).json({
            success: true,
            brand
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            brands: []
        })
    }
}
module.exports = {
    GetAll,
    GetById
}