import React from "react";
import img1 from "../../assets/card/Group 15.png";
import img2 from "../../assets/card/Group 16.png";
import img3 from "../../assets/card/Group 65.png";
import img4 from "../../assets/card/Group 17.png";
import img5 from "../../assets/card/Group 57.png";
import img6 from "../../assets/card/Group 59.png";

function CardContent() {
  const dataCard = [
    {
      id: 1,
      Title: "Qty Unit",
      Qty: "66",
      piece: "unit",
      SubText: "lorem ipsum",
      img: {
        src: img1,
        alt: "Image 1",
      },
    },
    {
      id: 2,
      Title: "Opening Oil",
      Qty: "12,562",
      piece: "Lts",
      SubText: "lorem ipsum",
      img: {
        src: img2,
        alt: "Image 2",
      },
    },
    {
      id: 3,
      Title: "Opening Grease",
      Qty: "13,450",
      piece: "Lts",
      SubText: "lorem ipsum",
      img: {
        src: img3,
        alt: "Image 3",
      },
    },
    {
      id: 4,
      Title: "Opening Coolant",
      Qty: "238,173",
      piece: "Lts",
      SubText: "lorem ipsum",
      img: {
        src: img4,
        alt: "Image 4",
      },
    },
    {
      id: 5,
      Title: "QTY",
      Qty: "66",
      piece: "unit",
      SubText: "lorem ipsum",
      img: {
        src: img5,
        alt: "Image 5",
      },
    },
  ];
  return (
    <>
      {dataCard.map((DataCard) => (
        <div className="col-md-3 ">
          <div className="card" style={{ width: 350 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  key={DataCard.id}
                  src={DataCard.img.src}
                  className="img-fluid rounded-start"
                  alt={DataCard.img.alt}
                  style={{
                    width: 100,
                    height: 133,
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="text-muted font-semibold">{DataCard.Title}</h6>
                  <div className="d-flex">
                    <i className="bi bi-database me-2" style={{ fontSize: '20px' }}></i>
                    <h5 class="font-extrabold">{DataCard.Qty} {DataCard.piece}</h5>
                  </div>

                  <p className="card-text">
                    <small>{DataCard.SubText}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardContent;
