import React from "react";

function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-text-large">My App</div>
      <ul className="nav-list">
        <li>
          <a href="posts.html">Posts</a>
        </li>
        <li>
          <a href="users.html">Users</a>
        </li>
        <li>
          <a href="todos.html">Todos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
