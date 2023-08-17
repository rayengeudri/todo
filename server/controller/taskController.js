const {getAll,add,modify,deleteOne} = require("../model/taskModel")

const getTask = (req, res) => {
getAll((err,results)=>{
err ? res.status(500).json(err) : res.status(200).json(results)
},req.params.id)

};

const addTask = (req,res)=>{
  console.log(req.body);
add((err,results)=>{ 
  console.log(err);
  err ? res.status(501).json(err) : res.status(201).json(results)
},req.body,req.params.id)
}

const update = (req,res) =>{
  console.log(req.body);
  console.log(req.params.id);
  modify((err, results)=>{
err ? res.status(500).json(err) : res.status(202).json(results)
  },req.body,req.params.id)
}

const remove =(req, res)=>{
  console.log(req.params)
  console.log(req.params.id)
deleteOne((err,results)=>{
  err ? res.status(503).json(err) : res.status(203).json(results)
},req.params.id)
}
module.exports = {
  getTask,
  addTask,
  update,
  remove
};
