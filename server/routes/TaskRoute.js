const express = require("express");

const { addTask, getTask,update,remove } = require("../controller/taskController");
const router = express.Router();
 
router.get("/getAll/:id",getTask);
router.post("/add/:id",addTask)
router.put("/:id",update)
router.delete("/:id",remove)
module.exports = router;
