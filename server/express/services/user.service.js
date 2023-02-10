const pool = require('../config/db.config')
class UserService {

    constructor() {}

    async GetUsers() {
        const [rows, fields] = await 
        pool.query(`
        select * from users;
        `,[])
        return rows;
    }
    async Register(body) {
        const [rows, fields] = await 
        pool.query(`
        INSERT INTO users (username, email, address, password, status,fullname,numberphone) 
        VALUES (?, ?, ?, ?, ?,?,?);
        `,[body.username,body.email,body.address,body.password,body.status,body.fullname,body.numberphone])
        return rows;
    }
    async GetByNumberPhone(numberphone) {
        const [rows, fields] = await 
        pool.query('select * from users where numberphone = ?',[numberphone])

        return rows;
    }
    async GetByUsername(username) {
        const [rows, fields] = await 
        pool.query('select * from users where username = ?',[username])

        return rows;
    }

    async GetById(id) {
        const [rows, fields] = await 
        pool.query('select * from users where id = ?',[id]);
        return rows;
    }

    async Update(body) {
        console.log(body)
        const [rows, fields] = await 
        pool.query(`
            UPDATE users
            SET username = ?, email = ?, address = ? ,password = ? , status = ?, fullname = ?,numberphone = ?
            WHERE id = ?
        `,[body.username,body.email,body.address,body.password,body.status,body.fullname, body.numberphone,body.id]);
        console.log(fields)
        return rows;
    }

    async Delete(id) {
        const [rows, fields] = await 
        pool.query(`
            DELETE FROM users
            WHERE id = ?
        `,[id]);
        return rows;
    }
}

module.exports = new UserService

