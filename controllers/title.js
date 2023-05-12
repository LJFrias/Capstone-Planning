const pool = require('../sql/connection')

const list = (req, res) => {
    pool.query(`SELECT * FROM title WHERE user_id = ${req.user.id}`, (err, rows, fields) => {
     res.json({titles: rows, user: req.user})
    })
 }

const show = (req, res) => {
    const {id} = req.params
    pool.query(`SELECT * FROM title WHERE id = ${id}`, (err, rows, fields) => {
     res.json(rows)
    })
 }

 const create = (req, res) => {
    const { booktitle, user_id} = req.body

    pool.query(`INSERT INTO title (id, booktitle, user_id) VALUES (?, ?, ?)`,
    [null, booktitle, user_id],
    (err, results, fields) => {
     res.json(results)
    })
 }

 const update = (req, res) => {
    const {id} = req.params

    pool.query(`UPDATE title SET ? WHERE id = ?`,
    [req.body, id],
    (err, row, fields) => {
     res.json(row)
    })
 }

 const remove = (req, res) => {
    const {id} = req.params

    pool.query(`DELETE FROM title WHERE id = ?`,
    [id],
    (err, row, fields) => {
     res.json(row)
    })
 }

 module.exports = {
    list,
    show,
    create,
    update,
    remove
 }