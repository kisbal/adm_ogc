import React from "react";

function Breadcrumb() {
  return (
    <>
      <div id="app">
        <nav
          aria-label="breadcrumb"
          className="breadcrumb-header"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Table
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumb;
