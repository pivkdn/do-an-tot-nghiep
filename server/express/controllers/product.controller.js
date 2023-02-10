const ProductService = require('../services/product.service')
const GetAlls = async(req,res,next) => {
    try {
        const products = await ProductService.GetAll()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            products: []
        })
    }
}
const GetAll = async(req,res,next) => {
    try {
        const products = await ProductService.GetAll()
        return res.status(200).json({
            success: true,
            products
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            products: []
        })
    }
}

const GetById = async(req,res,next) => {
    try {
        const {id} = req.body
        console.log(id)
        const product = await ProductService.GetById(id)
        return res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            product: {}
        })
    }
}

const Created = async(req,res,next) => {
    try {
        
        const product = await ProductService.Add(req.body)
        console.log(product,'product')
        if(product && product.affectedRows) {
            return res.status(200).json({
                success: true
            })
        } else {
            return res.status(200).json({
                success: false
            })
        }
       
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            product: {}
        })
    }
}

const Updated = async(req,res,next) => {
    try {
        
        const product = await ProductService.Update(req.body)
        console.log(product)
        if(product && product.affectedRows) {
            return res.status(200).json({
                success: true
            })
        } else {
            return res.status(200).json({
                success: false
            })
        }
       
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            product: {}
        })
    }
}

const Deleted = async(req,res,next) => {
    try {
        
        const product = await ProductService.Delete(req.body.id)
        console.log(product)
        if(product && product.affectedRows) {
            return res.status(200).json({
                success: true
            })
        } else {
            return res.status(200).json({
                success: false
            })
        }
       
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            product: {}
        })
    }
}
module.exports = {
    GetAll,
    GetById,
    GetAlls,
    Created,
    Updated,
    Deleted
}