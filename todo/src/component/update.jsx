import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Update() {
 [ newtask, setnewtask] =useState("")
  const update = ()=>{
    axios.put(`http://localhost:5000/api/Task/${location.state.idTask}`,{"task":newtask}).then((result)=>{
      console.log(result) ; navigate("/TodoWrapper")
    })
  }
  const location = useLocation()
const navigate  = useNavigate()
  return (
<div className='container-update'>
<div className='content-content'>
        <p>UPDATE YOUR TASK</p>
        <textarea id="story" name="story" rows="5" cols="33">

</textarea>
<button className='btn-update' onClick={()=>{update(newtask)}}>update</button>
    </div>
</div>
  )
}
export default Update

const location = useLocation()
const navigate  = useNavigate()