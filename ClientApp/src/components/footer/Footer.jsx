import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div
        style={{color: '#FF7630'}}
        className="text-center p-4 mt-5"
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold text-light" href="#">
          mlouellette.dev
        </a>
      </div>
    </div>
  );
}
