import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold logo">CINESTREAM</h5>
            <p className="text-light small mt-3">
              A film production company that specializes in creating visually
              stunning and impactful content.
            </p>

            <div className="d-flex gap-3 mt-3">
              <FaFacebook />
              <FaTwitter />
              <FaPinterest />
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">MENU</h6>
            <ul className="list-unstyled">
              <li className="mb-2">Help</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">Company</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">BUSINESS</h6>
            <ul className="list-unstyled">
              <li className="mb-2">Movie</li>
              <li className="mb-2">Web Series</li>
              <li className="mb-2">Pay TV</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">INVESTORS</h6>
            <ul className="list-unstyled">
              <li className="mb-2">Annual Report</li>
              <li className="mb-2">Stocks</li>
              <li className="mb-2">Financial</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small text-muted">
          © 2026 Copyright - by Eman
        </div>
      </div>
    </footer>
  );
}
