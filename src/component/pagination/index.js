import React from "react";

function PaginationIcon() {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-primary">
          <li className="page-item">
            <a className="page-link" href="#">
              <span aria-hidden="true">
                <i className="bi bi-chevron-left"></i>
              </span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <span aria-hidden="true">
                <i className="bi bi-chevron-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PaginationIcon;
