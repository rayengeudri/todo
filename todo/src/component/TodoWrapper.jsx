import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


function TodoWrapper() {
  const navigate =useNavigate()
  const location=useLocation ()
 const [data,setdata] =useState([])
 const[inputdata,setinputdata]=useState("")
 const[trigger,settrigger]=useState(false)
 const addtask =()=>{
  axios.post(`http://localhost:5000/api/Task/add/${location.state}`,{"task":inputdata}).then((result)=>{console.log(result)})
}
const del = (id)=>{
  axios.delete(`http://localhost:5000/api/Task/${id}`).catch((err)=>{console.log(err);})

}
  useEffect(()=>{
    console.log("👌",location.state)
    axios.get(`http://localhost:5000/api/Task/getAll/${location.state}`).then((result)=>{
      setdata(result.data )
    }).catch((err)=>{console.log(err);})
  
  },[trigger]) 
  return (
    <center>
    <div className='todo-wrapper'> 
    
    
    <div className='inputContainer'>
    <input type="text" className='input-todo-add' onChange={(e)=>{setinputdata(e.target.value)}} />
    <button className='add-btn'onClick={()=>{addtask(),settrigger(!trigger)}}>add</button >
    </div>
    
    
     { data.map((e)=> {
 
   return (
    
    <ul>
   <li> {e.task} </li> 
   <button className='update-btn' onClick={()=>{navigate("/update",{state:e})}}>update</button> 
   <button className='delete-btn' onClick={()=>{del(e.idTask);settrigger(!trigger)}}>delete</button> 
   </ul>
    )
  })
}

    </div>
    </center>
  )
}

export default TodoWrapper