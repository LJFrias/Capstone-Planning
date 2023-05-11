const express = require('express')
const router = express.Router()
const titleControllers = require("../controllers/title")



router.get("/", titleControllers.list )

router.get("/:id", titleControllers.show )

router.post("/", titleControllers.create )

router.put("/:id", titleControllers.update)

router.delete("/:id", titleControllers.remove)



 module.exports = router