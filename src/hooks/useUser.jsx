import  { useEffect, useState } from 'react';

const useUser = () => {
   const [user,setUser] = useState('')
   useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data =>{
        setUser(data)
    })
   },[])
   return [user]
};

export default useUser;