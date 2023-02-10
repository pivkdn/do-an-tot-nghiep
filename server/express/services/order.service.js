const pool = require('../config/db.config')
class OrderService {

    constructor() {}

    async Add(body) {
        const [rows, fields] = await 
        pool.query(`
        INSERT INTO orders ( address_wallet, products, address, payment, address_card, status) 
        VALUES (?,?,?,?,?,?);
        `,[body.address_wallet,body.products,body.address,body.payment,body.address_card,body.status])
        return rows;
    }
    
    async GetAll() {
        const [rows, fields] = await 
        pool.query('select * from orders');
        return rows;
    }
    async GetAlls() {
        const [rows, fields] = await 
        pool.query(`
        select a.*, b.localize, b.price, c.fullname ,c.numberphone from orders a 
        left join products b on a.products = b.id
        left join (select x.*,y.fullname,y.numberphone  from wallet x left join users y on x.address_wallet  = y.id ) c on a.address_card = c.id;
        `);
        return rows;
    }
    async GetById(id) {
        const [rows, fields] = await 
        pool.query('select * from orders where id = ?',[id]);
        return rows;
    }

}

module.exports = new OrderService

