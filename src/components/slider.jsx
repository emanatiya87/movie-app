import React from "react";
import img1 from "../assets/images/111.jpg";
import img2 from "../assets/images/12.jpg";
import img3 from "../assets/images/4.jpg";
import { useState } from "react";
export default function Slider() {
  const imgs = [img1, img2, img3];
  const [index, setIndex] = useState(2);
  return (
    <>
      <div className="container my-4 emptyPage">
        <div className="row align-items-center">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-info text-light"
              onClick={() => {
                setIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
              }}
            >
              past
            </button>
          </div>
          <div className="col-8 ">
            <img src={imgs[index]} alt="" style={{ height: "300px" }} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-info text-light"
              onClick={() => {
                setIndex((prev) => (prev + 1) % imgs.length);
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
