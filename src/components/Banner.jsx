import React from "react";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <main>
      <div className="container p-5 text-center">
        <div className="row">
          <div className="col">
            <h1 className="text-light my-4">
              Dicover The Series Streaming Experiance With <b>CinemaStream</b>
            </h1>
            <p className="text-secondary my-4">
              Our young and expert admins prepare amazing and trend series for
              you to watch online and pricless !
            </p>
            <div className="d-flex align-items-center justify-content-center gap-2 my-4">
              <Link to="/movies">
                {" "}
                <button className=" btn btn-secondary mainBtn">
                  Watch Now!
                </button>
              </Link>{" "}
              <button className=" btn btn-outline-secondary">Live TV</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
