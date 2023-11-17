import React from "react";
import BodyModal from "../modals";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function TableViewDetail() {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/view-transaksi");
    console.log("masuk sini");
  };

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

  const tablesDataView = [
    {
      id: 1,
      noTransaksi: "118362558",
      Shift: "Day",
      QTY: "4",
      Oilman: "Rahmansyah K",
      idOilman: 719283,
      Status: "Close",
      dateService: {
        date: "10/1/2023",
        LoginTime: "13.10",
        LogoutTime: "15.22",
      },
      DataTablet: "",
      DataMasuk: 36,
    },
    {
      id: 2,
      noTransaksi: "118362558",
      Shift: "Day",
      QTY: "4",
      Oilman: "Rahmansyah K",
      idOilman: 719283,
      Status: "Close",
      dateService: {
        date: "10/1/2023",
        LoginTime: "13.10",
        LogoutTime: "15.22",
      },
      DataTablet: "",
      DataMasuk: 36,
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
                          <th>Transaksi No</th>
                          <th>QTY</th>
                          <th>Shift</th>
                          <th>Oilman</th>
                          <th>Status</th>
                          <th>Login Time</th>
                          <th>Logout Time</th>
                          <th>Data Tablet</th>
                          <th>Data Masuk</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tablesDataView.map((dataTableView, index) => (
                          <tr key={index}>
                            <td>{dataTableView.noTransaksi}</td>
                            <td>{dataTableView.QTY}</td>
                            <td>{dataTableView.Shift}</td>
                            <td>
                              {dataTableView.Oilman}
                              <p>({dataTableView.idOilman})</p>
                            </td>
                            <td>{dataTableView.Status}</td>
                            <td>{dataTableView.dateService.LoginTime}</td>
                            <td>{dataTableView.dateService.LogoutTime}</td>
                            <td>{dataTableView.DataTablet}</td>
                            <td>{dataTableView.DataMasuk}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-link block"
                                onClick={handleViewClick}
                              >
                                View Detail
                              </button>
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

export default TableViewDetail;
