import React, { useEffect, useState } from 'react'

const FatchData = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        // Here i am fatching the data from api by using fatch method
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((val) => setData(val));
    },[])
    console.log(data);
  return (
    <div className='DataDiv'>
        <center>
        <table border={1}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th></tr>
        {
          data.map((item)=>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
        </tr>
      )}
      </table>
      </center>
    </div>

  )
}

export default FatchData