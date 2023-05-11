const pool = require('../sql/connection')
const bcrypt = require('bcrypt')

const create = async (req, res) => {
    const { name, email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    

    pool.query(`INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
    [null, name, email, hashedPassword],
    (err, results, fields) => {
     res.json(results)
    })
 }

 module.exports = {
    create,
 }