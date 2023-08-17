const {getAll,add, getone} = require("../model/users")

const getUsers = (req, res) => {
getAll((err,results)=>{
err ? res.status(500).json(err) : res.status(200).json(results)
})

};

const addUsers = (req,res)=>{
add((err,results)=>{
  err ? res.status(501).json(err) : res.status(201).json(results)
},req.body)
}
const getOneUser = (req,res)=>{
  getone((err,results)=>{
    err ? res.status(501).json(err) : res.status(201).json(results)
  },req.body.email)
  }
module.exports = {
  getUsers,
  addUsers,
  getOneUser
};
