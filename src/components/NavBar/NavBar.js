import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "linear-gradient(to right, blue, #f06d06)",
        height: "70px",
      }}
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
