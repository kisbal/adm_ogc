import React from "react";
import CardTransaksi from "../../component/card/cardTableTransaksi";
import Breadcrumb from "../../component/breadcrumb";
import TopBar from "../../component/topbar";
import Footer from "../../component/footer";

function ViewTransaksi() {
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
              <div>
                <Breadcrumb />
              </div>
              <div className="page-title">
                <div>
                  <h3>Dashboard Transaksi</h3>
                  <p>
                    Date: 12-Oktober-2023 | Shift: Day | Oilman: Rahmansyah
                    (Z26355)
                  </p>
                </div>
              </div>
            </div>
            <div className="page-content">
              {/* <div className="row">
            <h6>Shift:Day</h6>
              <div className="col-12 d-flex">
                <CardContentDay />
              </div>
              <h6>Shift:Night</h6>
              <div className="col-12 d-flex">
                <CardContentNight />
              </div>
            </div> */}
              <div>
                <CardTransaksi />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewTransaksi;
