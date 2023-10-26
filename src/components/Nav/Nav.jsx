import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="nav">
      <Link to="/home">
        <h2 className="nav-title">Dungeon Master Companion App</h2>
      </Link>
      <div style={{padding: "10px"}}>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link  style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="navLink" to="/user">
              Home
            </Link>

            <Link style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="navLink" to="/playerinfo">
              Player Entry
            </Link>

            <Link style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="navLink" to="/players">
              Character List
            </Link>

            <Link style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="navLink" to="/gameview">
              Game View
            </Link>

            <Link style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="navLink" to="/monsterentry">
              Monster Entry
            </Link>

            <Link style={{backgroundColor: "rgb(4, 20, 51, .6)" }} className="navLink" to="/monsters">
              Monster List
            </Link>

            <LogOutButton  className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
