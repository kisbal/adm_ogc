import React from "react";
import ModalEdit from "../form/formModalEdit";

function BodyModal() {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title" id="myModalLabel1">
          Edit Data
        </h5>
        <button
          type="button"
          className="close rounded-pill"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i data-feather="x"></i>
        </button>
      </div>
      <div className="modal-body">
        <ModalEdit />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn" data-bs-dismiss="modal">
          <i className="bx bx-x d-block d-sm-none"></i>
          <span className="d-none d-sm-block">Batal</span>
        </button>
        <button
          type="button"
          className="btn btn-primary ml-1"
          data-bs-dismiss="modal"
        >
          <i className="bx bx-check d-block d-sm-none"></i>
          <span className="d-none d-sm-block">Simpan</span>
        </button>
      </div>
    </>
  );
}

export default BodyModal;
