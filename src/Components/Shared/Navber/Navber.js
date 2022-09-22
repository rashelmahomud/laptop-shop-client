import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navber = ({ handleThemeChange, theme }) => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const navbermenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/fotfolio">Fotfolio</Link></li>

        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }

        <li><button
            onClick={handleThemeChange}
            className="rounded-full lg:mx-2 font-bold pr-2">

            {theme ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
        </button></li>
        

        {/* <li>{user ? <button onClick={logout} className="btn btn-ghost font-bold">SignOut</button> : <Link to="/login">Login</Link>}</li> */}
    </>


    return (
        <div className="navbar sticky top-0 w-full z-50 lg:px-10  bg-slate-100 bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbermenu}

                    </ul>
                </div>
                <a href='https://laptop-pats.web.app/' className="btn btn-ghost normal-case text-xl">LAPTOP PARTS</a>
            </div>
            <div className="navbar-end hidden lg:flex font-bold">
                <ul className="menu menu-horizontal p-0">
                    {navbermenu}
                </ul>
            </div>
            {/* <div className='navbar-end'>
                <label tabindex="0" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div> */}
            {/* ================== */}
            {user ? (<div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">       
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />

                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <p>{user.displayName}</p>
                        <li><a>Settings</a></li>
                        <button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button>
                    </ul>
                </div>
            </div>) : (<button className="btn btn-outline btn-accent"><Link to="/login">login</Link></button>)}


        </div>
    );
};

export default Navber;