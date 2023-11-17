import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BodyModal from "../modals";

function TableTransaksi() {
  const MySwal = withReactContent(Swal);
  const handleDeleteClick = () => {
    MySwal.fire({
      title: "Apakah Anda Yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmated) {
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.dimiss === Swal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your file is safe :)", "error");
      }
    });
  };
  const tableDataTransaksi = [
    {
      noUnit: "EXA363",
      Model: "EXAVACTOR",
      hmkm: "1002578",
      Owner: "PTDH",
      qty: "3",
      imgData: "https://i.pinimg.com/564x/c0/58/2f/c0582f0b1e861b5120dfeb362f6e2e0a.jpg",
    },
    {
      noUnit: "EXA363",
      Model: "EXAVACTOR",
      hmkm: "1002578",
      Owner: "PTDH",
      qty: "3",
      imgData: "https://i.pinimg.com/564x/c0/58/2f/c0582f0b1e861b5120dfeb362f6e2e0a.jpg",
    },
    {
      noUnit: "EXA363",
      Model: "EXAVACTOR",
      hmkm: "1002578",
      Owner: "PTDH",
      qty: "3",
      imgData: "https://i.pinimg.com/564x/c0/58/2f/c0582f0b1e861b5120dfeb362f6e2e0a.jpg",
    },
  ];
  return (
    <>
      <div className="page-heading">
        <div className="page-title"></div>
        <section className="section">
          <div className="row" id="table-head">
            <div className="col-12">
              <div className="card">
                <div className="card-content">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="thead-dark">
                        <tr>
                          {/* <th>No</th> */}
                          <th>No Unit</th>
                          <th>Model</th>
                          <th>HM-KM</th>
                          <th>Owner</th>
                          <th>QTY</th>
                          <th>Foto</th>
                          <th>Validation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableDataTransaksi.map((TableTransaksi, index) => (
                          <tr key={index}>
                            <td>{TableTransaksi.noUnit}</td>
                            <td>{TableTransaksi.Model}</td>
                            <td>{TableTransaksi.hmkm}</td>
                            <td>{TableTransaksi.Owner}</td>
                            <td>{TableTransaksi.qty}</td>
                            <td><img src={TableTransaksi.imgData} width={56}></img></td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-link block"
                                data-bs-toggle="modal"
                                data-bs-target="#default"
                              >
                                Edit
                              </button>
                              <div
                                className="modal fade text-left"
                                id="default"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="myModalLabel1"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-scrollable"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <BodyModal />
                                  </div>
                                </div>
                              </div>
                              <button
                                id="error"
                                type="button"
                                className="btn btn-link block"
                                onClick={handleDeleteClick}
                              >
                                Hapus
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TableTransaksi;
