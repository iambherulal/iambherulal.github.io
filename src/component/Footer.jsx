import React from "react";

function Footer(props) {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="copyright">
        <div className="container">
          <p className="copyright-text">
            &copy; Copyright {year} {props.name}. Made with {" "}
             <i className="fas fa-heart" style={{ color: "red" }}></i> by {" "}
            <a href={props.website}>{props.company}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
