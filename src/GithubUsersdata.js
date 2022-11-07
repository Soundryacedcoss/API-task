import React, { useEffect, useState } from 'react'
export const GithubUsersdata = () => {
  const[gitData,setGitData]=useState(["jhsdf","hsdf"])
  useEffect(()=>{
    // here i am fatching the data 
     fetch('https://api.github.com/users')
     .then((response)=>response.json())
     .then((val)=>{setGitData(val)})
     .catch((err)=>console.log(err.massage))
  },[])
  console.log(gitData);
  return (
    <div className='flex'> 
      {gitData.map((item)=><><div className='img DataDiv2'><img src={item.avatar_url} alt="" /><p>{item.id}</p><p>{item.login}</p></div></>)}

    </div>
    
  )
}
