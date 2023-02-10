const pool = require('../config/db.config')
class NewsService {
    constructor() {}

    async GetAll() {
        const [rows, fields] = await 
        pool.query('select * from news')

        return rows;
    }

    async GetById(id) {
        const [rows, fields] = await 
        pool.query('select * from news where id = ?',[id])

        return rows;
    }
}

module.exports = new NewsService;