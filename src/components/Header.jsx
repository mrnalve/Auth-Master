import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-around">
        <a className="btn btn-ghost normal-case text-2xl">Auth Master</a>
        <div>
        <Link className="btn btn-ghost text-right normal-case text-xl" to={'/'}>Home</Link>
        <Link className="btn btn-ghost text-right normal-case text-xl" to={'/orders'}>Orders</Link>
        <Link className="btn btn-ghost text-right normal-case text-xl" to={'/profile'}>Profile</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
        {
          user? <span>{user.email} <button onClick={handleLogOut} className="btn btn-active btn-secondary">Sign Out</button></span> : <button className="btn btn-active btn-secondary"><Link to={'/login'}>Log In</Link></button>
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
