import React from "react";

function ReportingData() {
  return (
    <>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="">
            Eksport Report
          </h4>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i data-feather="x"></i>
          </button>
        </div>
        <form action="#">
          <div className="modal-body">
            <div className="form-group">
              <label>Pilih Report </label>
              <fieldset className="form-group">
                <select className="form-select" id="basicSelect">
                  <option>Select 1</option>
                  <option>Select 2</option>
                  <option>Select 3</option>
                </select>
              </fieldset>
            </div>
            <div className="row d-flex">
              <div className="col-6">
                <div class="form-group">
                  <label for="basicInput">Start Date</label>
                  <input type="date" className="form-control" id="basicInput" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="basicInput">End Date</label>
                  <input type="date" className="form-control" id="basicInput" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary "
              data-bs-dismiss="modal"
            >
              <i className="bx bx-check d-block d-sm-none"></i>
              <span className="d-none d-sm-block">Download</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReportingData;
