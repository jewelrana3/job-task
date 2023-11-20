// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const Home = () => {
    const user = useLoaderData();
    console.log(user)
    const [users,setUsers] = useState(user)
    return (
        <div className="px-10 mt-20">
            {
                users.map((data) => <div key={data._id}>
                    <p><img src={data.photo} alt="" /></p>
                    <p className="font-bold">Name : <span >{data.name}</span></p>
                    <p>Email : {data.email}</p>
                </div>)
            }
        </div>
    );
};

export default Home;