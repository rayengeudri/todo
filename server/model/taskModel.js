const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback, id) => {
    var sql = `SELECT * FROM task WHERE users_idusers = ?`;
    connection.query(sql, [id], (err, results) => {
      callback(err, results);
    });
  };
  
  

const add = (callback,data,id) =>{
    var sql =`insert into task (task,users_idusers) values(?,?)`
    connection.query(sql,[data.task,id],(err,results)=>{
callback(err,results)
    })
}

const modify =(callback,data,id)=>{
    console.log(data,"data");
    var sql=`update task set task = ? where idTask`
    connection.query(sql,[data.task],(err,results)=>{
        callback(err,results)
    })
}
const deleteOne= (callback,id) =>{
    console.log(id);
    var sql = `delete from task where idTask =?`
connection.query(sql,[id],(err,results)=>{
    callback(err,results)
})

}
module.exports = { getAll,add,modify,deleteOne }; 
