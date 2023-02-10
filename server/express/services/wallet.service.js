const pool = require('../config/db.config')
class WalletService {
    constructor() {}

    async GetAll() {
        const [rows, fields] = await 
        pool.query('select a.*,b.fullname, b.numberphone from wallet a left join users b on a.address_wallet = b.id ')

        return rows;
    }

    async GetById(id) {
        const [rows, fields] = await 
        pool.query('select * from wallet where id = ?',[id])

        return rows;
    }

    async GetByUser(id) {
        const [rows, fields] = await 
        pool.query('select * from wallet where address_wallet = ?',[id])

        return rows;
    }

    async Created(body) {
        console.log(body);
        const [rows, fields] = await 
        pool.query(`
        INSERT INTO wallet (address_wallet, money, fee, banking, card) 
        VALUES ( ?, ?, ?, ?, ?);
        `,[body.address_wallet, body.money, body.fee, body.banking, body.card])

        return rows;
    }

    async Update(id,money) {
        const [rows, fields] = await 
        pool.query(`
            UPDATE wallet
            SET money = ?
            WHERE id = ?
        `,[money,id]);
        return rows;
    }
}

module.exports = new WalletService;