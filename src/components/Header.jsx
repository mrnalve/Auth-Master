import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-around">
        <a className="btn btn-ghost normal-case text-2xl">Auth Master</a>
        <div>
        <Link className="btn btn-ghost text-right normal-case text-xl" to={'/'}>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
