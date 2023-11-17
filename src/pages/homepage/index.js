import React from "react";
import TopBar from "../../component/topbar";
import Sidebar from "../../component/sidebar";
import Breadcrumb from "../../component/breadcrumb";
import CardContent from "../../component/card/cardContent";
import CardTable from "../../component/card/cardTable";
import Footer from "../../component/footer";

function Homepage() {
  return (
    <>
      <div id="app">
        <div id="sidebar">{/* <Sidebar/> */}</div>
        <div id="main" className="layout-navbar">
          <header className="mb-3">
            <div className="card">
              <TopBar />
            </div>
          </header>
          <div id="main-content">
            <div className="page-heading">
            <div><Breadcrumb /></div>
              <div className="page-title">
                <div className="order-md-1 order-last text-center">
                  <h3>Oil Admin Dashboard</h3>
                  <p className="text-subtitle text-muted text-center">
                    Last Transaksi Date: 12-Oktober-2023
                  </p>
                </div>
              </div>
            </div>
            <div className="page-content">
              <section>
                <div className="row">
                  <CardContent />
                </div>
                <div>
                  <CardTable />
                </div>
              </section>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
