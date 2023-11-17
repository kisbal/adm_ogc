import React from "react";
import TableViewDetail from "../table/tableViewDetail";

function CardTableViewDetail() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-9 d-flex">
              <h3>Oily Summary</h3>
            </div>
            <div className="col-3 justify-content-end">
              <div class="form-group position-relative has-icon-right">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input with icon left"
                />
                <div className="form-control-icon">
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
            <TableViewDetail/>
        </div>
      </div>
    </>
  );
}

export default CardTableViewDetail;
