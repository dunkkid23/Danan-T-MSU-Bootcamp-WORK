import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="bg-secondary d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col text-white text-center">
              <p className="m-0">Dunder Mifflin Corporation</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;