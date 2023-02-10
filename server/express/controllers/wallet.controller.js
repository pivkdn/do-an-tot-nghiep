const WalletService = require('../services/wallet.service')


const NapTien = async(req,res,next) => {
    try {
        const {id,money} = req.body
        const wallet = await WalletService.GetById(id)
        await WalletService.Update(id,Number(wallet[0].money) + Number(money))
        return res.status(200).json({
            success: true
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            wallet: {}
        })
    }
}
const GetById = async(req,res,next) => {
    try {
        const {id} = req.body
        const wallet = await WalletService.GetById(id)
        return res.status(200).json({
            success: true,
            wallet: wallet[0]
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            wallet: {}
        })
    }
}
const GetByUser = async(req,res,next) => {
    try {
        const {id} = req.body
        const wallet = await WalletService.GetByUser(id)
        return res.status(200).json({
            success: true,
            wallet: wallet[0]
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            wallet: {}
        })
    }
}
const CreateWallet = async(req,res,next) => {
    try {
        //const {adrress}
    } catch (error) {
        
    }
}
const GetAll = async(req,res,next) => {
    try {
        const wallet = await WalletService.GetAll()
        return res.status(200).json(wallet)
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            wallet: {}
        })
    }
}
module.exports = {

    GetById,
    GetByUser,
    GetAll,
    NapTien
}