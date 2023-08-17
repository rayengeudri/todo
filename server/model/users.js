const connection = require("../database-mysql/index");

const getAll = (callback) => {
    var sql  =`select * from users`
    connection.query(sql,(err,results)=>{ 
callback(err,results)
    })
}
const getone =(callback,email) => {
    var sql  =`select * from users where email = ?`
    connection.query(sql,[email],(err,results)=>{ 
callback(err,results)
    })}

const add = (callback,data) =>{
    var sql =`insert into users (username,email,password) values(?,?,?)`
    connection.query(sql,[data.username,data.email,data.password],(err,results)=>{
callback(err,results)
    })
}

module.exports = { getAll,add,getone };