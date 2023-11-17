import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useNavigate } from "react-router-dom";

function Table() {
  const Navigate = useNavigate();
  const tablesData = [
    {
      noUnit: " lv2416",
      Kategori: "DT1540",
      QTY: "4",
      serviceTruck: "ST1093",
      compartement: "Engine Oil",
      dateService: {
        date: "10/1/2023",
        timeStart: "13.10",
        timeEnd: "15.22",
      },
      imgData: "",
      TypeOfOil: "RIMULA R3 MV 15W-40",
    },
    {
      noUnit: " lv2416",
      Kategori: "DT1540",
      QTY: "4",
      serviceTruck: "ST1093",
      compartement: "Engine Oil",
      dateService: {
        date: "10/1/2023",
        timeStart: "13.10",
        timeEnd: "15.22",
      },
      imgData: "",
      TypeOfOil: "RIMULA R3 MV 15W-40",
    },
    {
      noUnit: " lv2416",
      Kategori: "DT1540",
      QTY: "4",
      serviceTruck: "ST1093",
      compartement: "Engine Oil",
      dateService: {
        date: "10/1/2023",
        timeStart: "13.10",
        timeEnd: "15.22",
      },
      imgData: "",
      TypeOfOil: "RIMULA R3 MV 15W-40",
    },
    {
      noUnit: " lv2416",
      Kategori: "DT1540",
      QTY: "4",
      serviceTruck: "ST1093",
      compartement: "Engine Oil",
      dateService: {
        date: "10/1/2023",
        timeStart: "13.10",
        timeEnd: "15.22",
      },
      imgData: "",
      TypeOfOil: "RIMULA R3 MV 15W-40",
    },
  ];
  const handleClick = (e) => {
    Navigate("/view-unit")
  }

  return (
    <>
      <div className="page-heading">
        <div className="page-title">
        </div>
        <section className="section">
          <div className="row" id="table-head">
            <div className="col-12">
              <div className="card">
                <div className="card-content">
                  <div className="buttons text-end">
                    <a href="#" class="btn btn-success">
                      Eksport
                    </a>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-3">
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
                  {/* <div className="card-body">
                            <p>Similar to tables and dark tables, use the modifier className <code
                                    className="highlighter-rouge">.thead-light</code> or <code
                                    className="highlighter-rouge">.thead-dark</code> to
                                make <code className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.
                            </p>
                        </div> */}
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="thead-dark">
                        <tr>
                          <th>No Unit</th>
                          <th>Kategori</th>
                          <th>Service Date</th>
                          <th>QTY</th>
                          <th>Services</th>
                          <th>Compartement</th>
                          <th>Type Of Oil</th>
                          <th>Time Start</th>
                          <th>Time End</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tablesData.map((data, index) => (
                            <tr key={index}>
                                <td onClick={handleClick} className="text-primary">
                                  {data.noUnit}</td>
                                <td>{data.Kategori}</td>
                                <td>{data.dateService.date}</td>
                                <td>{data.QTY}</td>
                                <td>{data.serviceTruck}</td>
                                <td>{data.compartement}</td>
                                <td>{data.TypeOfOil}</td>
                                <td>{data.dateService.timeStart}</td>
                                <td>{data.dateService.timeEnd}</td>
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

export default Table;
