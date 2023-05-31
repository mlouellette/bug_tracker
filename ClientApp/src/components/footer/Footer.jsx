import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="text-center p-4 mt-5"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          position: "relative",
          bottom: -140,
          height: "100%",
        }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="#">
          mlouellette.dev
        </a>
      </div>
    </>
  );
}
