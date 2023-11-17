import React from "react";
import img1 from "../../assets/card/Group 59.png"

function CardContentNight() {
  const dataCardNight = [
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
        id: 3,
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
        id: 4,
        Title: "Qty Unit",
        Qty: "66",
        piece: "unit",
        SubText: "lorem ipsum",
        img: {
          src: img1,
          alt: "Image 1",
        },
      },
  ];
  return (
    <>
      {dataCardNight.map((NightCard) => (
        <div className="col-md-3 ">
          <div className="card" style={{ width: 350 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  key={NightCard.id}
                  src={NightCard.img.src}
                  className="img-fluid rounded-start"
                  alt={NightCard.img.alt}
                  style={{
                    width: 100,
                    height: 133,
                  }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h6 class="text-muted font-semibold">{NightCard.Title}</h6>
                  <div className="d-flex">
                    <i className="bi bi-database me-2" style={{ fontSize: '20px' }}></i>
                    <h5 class="font-extrabold">{NightCard.Qty} {NightCard.piece}</h5>
                  </div>
                  <p className="card-text">
                    <small>{NightCard.SubText}</small>
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

export default CardContentNight;
