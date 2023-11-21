// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";




const Home = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/user/ka');
                const data = await response.json();
                setUserData(data);
                (data)
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="navber mt-20">
          {userData ? (
                        <div className='flex justify-center items-center'>
                            <div className='mt-20'>
                                <img src={userData.photo} alt="" />
                                <p className='text-xl font-bold uppercase'>{[userData.name]}</p>
                                <p className='uppercase'>{[userData.email]}</p>

                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
        </div>
    );
};

export default Home;