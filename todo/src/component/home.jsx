import { colors } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate  =useNavigate()
  return (
    <div >
        <div className='btn-container'>
            <button className='signin-home-btn' onClick={()=>{navigate("/login")}}>signin</button>
            <button className='signup-home-btn'onClick={()=>{navigate("/signup")}}>signup</button>
        </div>
    <div className='home-center-container'>
      <div className='home-container'>
        
        <div>
          <h1 style={{color:"#3F3D40",width:"500px" }}>TODO</h1>
        </div>
      </div>
     

</div>
</div>
    
  );
}