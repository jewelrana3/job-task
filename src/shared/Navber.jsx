import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navber = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(error => (error))
    }
    return (
        <div className="navbar text-white bg-stone-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <Link to='/sign'>signUp</Link>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">WebyaPar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <Link to='/'><li><a>Home</a></li></Link>
                   
                    <li><a>page</a></li>
                </ul>
            </div>
            <div className="navbar-end">
            {user ? <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-0" ><button onClick={handleLogOut} className="btn btn-outline btn-sm mb-2 bg-black text-white">Log Out</button></div> : <Link to='/login'>
                <button className="btn btn-outline btn-sm bg-black text-white mb-2">login</button>
            </Link>}
            </div>
        </div>
    );
};

export default Navber;