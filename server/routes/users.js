const express = require("express");
const {getUsers,addUsers, getOneUser}= require("../controller/users")
const router = express.Router();
 
router.get("/getAll",getUsers);
router.post("/add",addUsers) ;
router.post("/login",getOneUser);
router.get("/login",)
module.exports = router;
