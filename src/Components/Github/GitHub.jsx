import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const GitHub = () => {

    // const [gitData , setGitData] = useState([]);
     
    // useState(() => {
    //     const api = async () => {
    //        const response = await fetch('https://api.github.com/users/tousiqkashif');
    //        const resData = await response.json();
    //        setGitData(resData);
    //     }
    //     api();
        
    // } ,[]);

    const gitData = useLoaderData();

  return (
    <div className='bg-slate-600 flex justify-around'>
        <div className='flex flex-col items-center justify-center gap-y-10'>
        <h1 className='text-3xl text-slate-200'>Name: {gitData.login}</h1>
        <h1 className='text-3xl text-slate-200'>Followers: {gitData.followers}</h1>
        </div>
        
         <img className='w-[300px] h-[300px]' src={gitData.avatar_url}  alt="Git Picture" />

    </div>
  )
}

export default GitHub

// i am using loader in router browser for optimize load speed

export const apiLoader = async () => {

  const response = await fetch('https://api.github.com/users/tousiqkashif');
  return response.json(); 
}
