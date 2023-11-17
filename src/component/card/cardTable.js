import React from "react";
import Table from "../table";
import PaginationIcon from "../pagination";

function CardTable() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>Oily Summary</h3>
          <p className="lead text-danger">Notes for validation:</p>
          <ul>
            <li>Close Data</li>
            <li>Variant</li>
            <li>Intershift</li>
          </ul>
        </div>
        <div className="card-body">
          <Table />
          <div className="d-flex justify-content-end">
          <PaginationIcon/>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default CardTable;
