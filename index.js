const express = require("express")
const app = express()
const pool = require("./sql/connection")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/users')
const titleRoutes = require('./routes/title')
const signupRoutes = require('./routes/signup')
const signinRoutes = require('./routes/signin')
const cors = require('cors')

const PORT = process.env.PORT || 5000

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization
    console.log({auth: req.headers.authorization})

    const token = authHeader && authHeader.split(" ")[1]
    console.log({token})

    if(!token) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)

        req.user = user
        console.log(req.user)
        next()
    })
}


app.use(cors())
app.use(function (req, res, next) {
    //Website we allow
    // res.setHeader(
    //     "Access-Control-Allow-Orgin",
    //     "http://localhost:3000"
    // )

    res.setHeader(
        "Access-Control-Allow-Orgin",
        "https://iridescent-cuchufli-0277ba.netlify.app"
    )

    //Methods we allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST"
    )

    //Content we allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    )

    //Set to true if you need the website to include cookies in the request sent to the API
    res.setHeader(
        "Access-Control-Allow-Credentials",
        true
    )
    next()
})
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