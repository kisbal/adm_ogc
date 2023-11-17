import React from "react";
import Footer from "../../component/footer";
import Breadcrumb from "../../component/breadcrumb";
import CardContentDay from "../../component/card/cardContentDay";
import CardContentNight from "../../component/card/cardContentNight";
import TableViewDetail from "../../component/card/cardTableViewDetail";
import TopBar from "../../component/topbar";

function ViewDetail() {
  return (
    <>
      <div id="app">
        <div id="sidebar"></div>
        <div id="main" className="layout-navbar">
          <header className="mb-3">
            <div className="card">
              <TopBar />
            </div>
          </header>
          <div id="main-content">
            <div className="page-heading">
              <div className="page-title">
                <Breadcrumb />
                <div>
                  <h3>Oil Admin Dashboard</h3>
                </div>

                <p className="text-subtitle text-muted">
                  Last Transaksi Date: 12-Oktober-2023
                </p>
              </div>
            </div>
            <div className="page-content">
              <div className="row">
                <h6>Shift:Day</h6>
                <div className="col-12 d-flex">
                  <CardContentDay />
                </div>
                <h6>Shift:Night</h6>
                <div className="col-12 d-flex">
                  <CardContentNight />
                </div>
              </div>
              <div>
                <TableViewDetail />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDetail;
