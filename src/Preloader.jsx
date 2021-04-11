import React from "react";

function Preloader() {
  return (
    <React.StrictMode>
      <a href="/#" className="scroll-top-btn" data-scroll-goto="1">
        <i className="fa fa-arrow-up"></i>
      </a>
      <div id="preloader-wrap">
        <div className="preloader-inner">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Preloader;
