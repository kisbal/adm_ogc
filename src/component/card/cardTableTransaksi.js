import React from "react";
import TableTransaksi from "../table/tableTransaksi";
import ReportingData from "../modals/reporting";

function CardTransaksi() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row d-flex">
            <div className="col-6">
              <h3>No. Transaksi: 112038839</h3>
            </div>
            <div className="col-6 justify-content-end d-flex">
              <div className="buttons">
                <a href="#" class="btn btn-primary">
                  Upload Data
                </a>
              </div>
              <div className="buttons">
                <a href="#" class="btn btn-success">
                  Tambah Data
                </a>
              </div>
              <div className="buttons">
                <a href="#" class="btn btn-primary">
                  Print Transaksi
                </a>
              </div>
              <div className="buttons">
                <a href="#" class="btn btn-primary">
                  Export to Ellips
                </a>
              </div>
              <div className="buttons" data-bs-toggle="modal" data-bs-target="#inlineForm">
                <a href="#" class="btn btn-warning">
                  Exsport to Excel
                </a>
              </div>
              <div
                class="modal fade text-left"
                id="inlineForm"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel33"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                  role="document"
                >
                  <ReportingData/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <TableTransaksi />
        </div>
      </div>
    </>
  );
}

export default CardTransaksi;
