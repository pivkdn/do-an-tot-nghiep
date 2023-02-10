const pool = require('../config/db.config')
class ProductService {

    constructor() {}

    async Add(body) {
        const [rows, fields] = await 
        pool.query(`
        INSERT INTO products (localize, description, product_name, price, 
            base_price, active, branch, slug, high_res_image, image) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, ?);
        `,[body.localize,body.description,body.product_name,body.price,body.base_price,
            body.active,body.brand,body.slug,body.high_res_image,body.image])
        return rows;
    }
    async Update(body) {
        const [rows, fields] = await 
        pool.query(`
        UPDATE products SET localize = ?,description = ?, product_name = ?,price = ?, base_price = ?, image = ?
        WHERE id = ?;
        `,[body.localize,body.description,body.product_name,body.price,body.base_price, body.image,body.id])
        return rows;
    }

    async Delete(id) {
        const [rows, fields] = await 
        pool.query(`
        DELETE FROM  products 
        WHERE id = ?;
        `,[id])
        return rows;
    }
    
    async GetAll() {
        const [rows, fields] = await 
        pool.query('select * from products');
        return rows;
    }
    async GetById(id) {
        const [rows, fields] = await 
        pool.query('select * from products where id = ?',[id]);
        return rows;
    }

}

module.exports = new ProductService

