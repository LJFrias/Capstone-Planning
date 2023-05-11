const express = require("express")
const app = express()
const pool = require("./sql/connection")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/users')
const titleRoutes = require('./routes/title')
const signupRoutes = require('./routes/signup')
const signinRoutes = require('./routes/signin')

const PORT = process.env.PORT || 5000

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization
    console.log({auth: req.headers.authorization})

    const token = authHeader && authHeader.split(" ")[1]
    console.log({token})

    if(!token) return res.sendStatus(401)

    jwt.verify(token, "movies", (err, user) => {
        if(err) return res.sendStatus(403)

        req.user = user
        console.log(req.user)
        next()
    })
}

app.use(express.json())
app.use("/users", authenticateToken, userRoutes)
app.use("/title", authenticateToken, titleRoutes )
app.use("/signup", signupRoutes )
app.use("/signin", signinRoutes )


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to our server"
    })
})





app.listen(PORT, () => console.log(`I am listening on port ${PORT}`))