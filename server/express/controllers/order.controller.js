const OrderService  = require('../services/order.service')
const WalletService = require('../services/wallet.service')
const Add = async(req,res,next) => {
    try {
        const order = await OrderService.Add(req.body)
        if(order) {
            const wallet = await WalletService.GetById(req.body.products)
            if(wallet.length > 0 && wallet[0].id) {
                const newMoney = parseInt(wallet[0].money) -  parseInt(req.body.payment)
                
                const upWallet = 
                await WalletService.Update(wallet[0].id,newMoney)
                if(upWallet) {
                    return  res.status(200).json({
                        success: true,
                        code: 0
                    }) 
                }
            }
        }
        return  res.status(200).json({
            success: false,
            code: 1
        }) 
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            code: 99
        }) 
    }
}
const GetAlls = async(req,res,next) => {
    try {
        const orders = await OrderService.GetAlls()
        console.log(orders)
        return  res.status(200).json(orders) 
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            orders:[]
        }) 
    }
}
const GetAll = async(req,res,next) => {
    try {
        const orders = await OrderService.GetAll()
        return  res.status(200).json({
            success: true,
            code: 0,
            orders
        }) 
    } catch (error) {
        return res.status(200).json({
            success: false,
            code: 99,
            orders:[]
        }) 
    }
}

module.exports = {
    Add,
    GetAll,
    GetAlls
}