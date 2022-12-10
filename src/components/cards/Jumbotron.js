import React from 'react';

const Jumbotron = ({
    title,
    subTitle = "Welcome to P-inventory",
  }) => {
    return (
        <div
        className="container-fluid jumbotron"
        style={{ marginTop: "-8px", height: "200px" }}
      >
        <div className="row">
          <div className="col text-center p-5">
            <h1 className="fw-bold">{title}</h1>
            <p className="lead">{subTitle}</p>
          </div>
        </div>
      </div>
    );
};

export default Jumbotron;