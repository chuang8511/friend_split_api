import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/sign_up">Sign up</Link>
          </li>

          {/* <li>
            <Link to="/login">Log in</Link>
          </li> */}
          {/* <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/activities">Activity</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;