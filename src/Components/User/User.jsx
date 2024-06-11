import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    
    const {userId} = useParams();

  return (
    <div className='bg-slate-600 text-white flex justify-center text-4xl h-[500px] items-center'>
   
      <h1>User ID: {userId}</h1>
    </div>
  )
}

export default User
