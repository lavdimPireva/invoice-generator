import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "linear-gradient(to right, red, #f06d06)" }}
    >
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand text-white" href="/">
          Supermarket
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
