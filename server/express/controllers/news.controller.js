const NewsService = require('../services/news.service')

const GetAll = async(req,res,next) => {
    try {
        const news = await NewsService.GetAll()
        return res.status(200).json({
            success: true,
            news
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            news: []
        })
    }
}

const GetById = async(req,res,next) => {
    try {
        const {id} = req.body
        const news = await NewsService.GetById(id)
        return res.status(200).json({
            success: true,
            news
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            news: []
        })
    }
}
module.exports = {
    GetAll,
    GetById
}