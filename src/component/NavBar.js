import * as React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="text-white mx-10 py-2">
        <ul className="flex gap-8">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/cc"> new Chat</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
