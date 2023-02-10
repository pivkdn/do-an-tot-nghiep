const pool = require('../config/db.config')
class BrandService {
    constructor() {}

    async GetAll() {
        const [rows, fields] = await 
        pool.query('select * from brands')

        return rows;
    }

    async GetById(id) {
        const [rows, fields] = await 
        pool.query('select * from brands where id = ?',[id])

        return rows;
    }
}

module.exports = new BrandService;