const UserService = require('../services/user.service');
const WalletService = require('../services/wallet.service');

const GetUsers = async(req,res,next) => {
    try {
        const data = await UserService.GetUsers()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            success: false,
            code: 99
        })
    }
}
const GetUser = async(req,res,next) => {
    try {
        const {id} = req.body
        const data = await UserService.GetById(id)
        return res.status(200).json(data[0])
    } catch (error) {
        return res.status(500).json({
            success: false,
            code: 99
        })
    }
}
const Register = async(req,res,next) => {
    try {
        const {username} = req.body
        
        const data = await UserService.GetByUsername(username)

        if(data.length > 0) {
            return res.status(200).json({
                code: 2,
                success: false
            })
        }
        const sResult = await UserService.Register(req.body);
        if(sResult && sResult.insertId) {
            const newUser = await UserService.GetByUsername(username)
            const paramWallet = {
                address_wallet: newUser[0].id,
                money: 0,
                fee: 0,
                banking: 'VCB',
                card: '0000'
            }
            const newWallet = await WalletService.Created(paramWallet)
            if(newWallet.insertId) {
                return res.status(200).json({
                    success: true,
                    code: 0
                })
            }
            
        } 
        return res.status(200).json({
            success: false,
            code: 1
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            code: 99
        })
    }
}

const RegisterToPhone = async(req,res,next) => {
    try {
        const {numberphone} = req.body
        
        const data = await UserService.GetByNumberPhone(numberphone)

        if(data.length > 0) {
            return res.status(200).json({
                code: 0,
                success: true,
                user: data[0]
            })
        }

        const paramUser = {
            username: '',
            email: '',
            address: '',
            password: '',
            status: 0,
            fullname: '',
            numberphone
        }
        const sResult = await UserService.Register(paramUser);
        if(sResult && sResult.insertId) {
            const newUser = await UserService.GetByNumberPhone(numberphone)
            const paramWallet = {
                address_wallet: newUser[0].id,
                money: 0,
                fee: 0,
                banking: 'VCB',
                card: '0000'
            }
            const newWallet = await WalletService.Created(paramWallet)
            if(newWallet.insertId) {
                return res.status(200).json({
                    success: true,
                    code: 0,
                    user: newUser[0]
                })
            }
            
        } 
        return res.status(200).json({
            success: false,
            code: 1
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            code: 99
        })
    }
}
const Login = async(req,res,next) => {
    try {
        console.log(req.body);
        const {username,password} = req.body;
        const userCurrent = await UserService.GetByUsername(username)
        console.log(userCurrent)
        if(userCurrent.length < 1) {
            return res.status(200).json({
                success: false,
                code: 1,
                user: []
            })
        }
        if(userCurrent[0].password === password) {
            return res.status(200).json({
                success: true,
                code: 0,
                user: userCurrent[0]
            })
        }
        return res.status(200).json({
            success: false,
            code: 1,
            user: []
        })
    } catch (error) {

        console.log(error)
        return res.status(200).json({
            success: false,
            code: 99,
            user: []
        })
    }
}



const Delete  = async(req,res,next) => {
    try {
        const {id} = req.body
        const deleting = await UserService.Delete(id) 
        if(deleting) {  
            return res.status(200).json({
                success: true,
                code: 0,
            })
        }
        return res.status(200).json({
            success: false,
            code: 1,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            code: 99,
        }) 
    }
}
const Edit = async(req,res,next) => {
    try {
        const {username,email,address,fullname,numberphone,id} = req.body

        const paramUser = {
            username,
            email,
            address,
            password: '',
            status: 0,
            fullname,
            numberphone,
            id
        }
        const a = await UserService.Update(paramUser);
        if(a && a.affectedRows) {
            return res.status(200).json({
                success: true,
                code: 0
            })
        } else {
            return res.status(200).json({
                success: false,
                code: 1
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            code: 99,
        }) 
    }
}
module.exports = {
    Register,
    Login,
    Delete,
    RegisterToPhone,GetUsers,GetUser,Edit
}