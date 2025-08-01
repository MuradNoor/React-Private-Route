import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () => {
      logOut()
      .then(() => {
        console.log("Sign out successfully")
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    const Links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
     <li><NavLink to="/orders">Orders</NavLink></li>
     {
      user && <>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      </>
     }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Moha Milon</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className='navbar-end'>
    {
      user ?
      <>
      <div className='flex justify-around gap-4'>
        <span>{user.email}</span>
      <button onClick={handleSignOut}>Signout</button>
      </div>
      </> 
      :
      <Link to='/login'>Sign In</Link>
    }
  </div>
</div>
    );
};

export default Navbar;