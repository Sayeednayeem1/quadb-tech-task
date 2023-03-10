import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../Time/Time';

const Navbar = () => {

    // todo this is navbar

    let navItems = <>
        <li className='text-2xl font-bold text-white'><Link to='/'>Home</Link></li>
    </>

    return (
        <div className=''>
            <div className="navbar bg-gradient-to-r from-violet-500 to-fuchsia-500m py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a href='/' className="text-2xl font bold text-white">Abu Sayed</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none"><Time></Time></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;