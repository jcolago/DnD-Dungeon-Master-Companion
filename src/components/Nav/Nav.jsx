import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Dungeon Master Companion App</h2>
      </Link>
      <div style={{padding: "10px"}}>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/playerinfo">
              Player Entry
            </Link>

            <Link className="navLink" to="/players">
              Character List
            </Link>

            <Link className="navLink" to="/gameview">
              Game View
            </Link>

            <Link className="navLink" to="/monsterentry">
              Monster Entry
            </Link>

            <Link className="navLink" to="/monsters">
              Monster List
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
