import  { useEffect, useState } from 'react';

const useUser = () => {
   const [user,setUser] = useState('')
   useEffect(()=>{
    fetch('https://server-job-task.vercel.app/user')
    .then(res => res.json())
    .then(data =>{
        setUser(data)
    })
   },[])
   return [user]
};

export default useUser;