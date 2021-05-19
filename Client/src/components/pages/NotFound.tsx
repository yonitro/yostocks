import React from "react";
import Add from "../../styles/images/add.jpg";
import Yahoo from "../../styles/images/yahoo.png";
const NotFound = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="yahoo-header">
            <img src={Yahoo} alt="" />
            <a href="#" className="y-help">
              Help
            </a>
          </div>
        </div>

        <div className="row box-cont-holder">
          <div className="container error-container">
            <div className="row  d-flex align-items-center justify-content-center">
              <div className="col-md-12 text-center">
                <h1 className="big-text">Oops!</h1>
                <h2 className="small-text">404 - PAGE NOT FOUND</h2>
              </div>
              <div className="col-md-6  text-center">
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <a
                  href="http://localhost:3000/"
                  className="button button-dark-blue iq-mt-15 text-center"
                >
                  GOTO HOME PAGE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
