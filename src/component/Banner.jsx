import React from "react";
import BannerImg from "../img/bheru_lal_gameti.jpg";
import SocialMedia from "./SocialMedia";
function Banner() {
  return (
    <section className="hero-banner" data-scroll-index="1">
      <div className="container">
        <div className="row align-items-center banner-column">
          <div className="col-lg-7 col-xl-6 col-md-10 wow fadeInUp">
            <div className="hero-inner">
              <h1>
                I'm <br />
                Bheru Lal Gameti
              </h1>
              <p>
                I've been a WordPress developer for 4+ years. I live and breathe
                WordPress.
              </p>
              <p>
                My custom-built websites are fast loading, accessible, and easy
                to manage. My design partners will help you improve conversion
                rates and user engagement.
              </p>
              <ul className="hero-social-list">
                <SocialMedia
                  title="Bheru lal Gameti Github"
                  url="https://www.github.com/iambherulal"
                  icon="fab fa-github"
                />
                <SocialMedia
                  title="Bheru lal Gameti Linkedin"
                  url="https://www.linkedin.com/in/iambherulal"
                  icon="fab fa-linkedin"
                />
                <SocialMedia
                  title="Bheru lal Gameti Instagram"
                  url="https://www.instagram.com/iambherulal"
                  icon="fab fa-instagram"
                />
                <SocialMedia
                  title="Bheru lal Gameti WordPress"
                  url="https://profiles.wordpress.org/iambherulal"
                  icon="fab fa-wordpress"
                />
                <SocialMedia
                  title="globally digital"
                  url="https://www.globally.digital"
                  icon="fas fa-globe-asia"
                />
              </ul>
              <a href="/#" data-scroll-nav="2" className="about-me-banner">
                <span className="icon">
                  <i className="fas fa-arrow-down"></i>
                </span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-5 col-xl-6 col-md-12 hero-img-resp wow fadeInUp"
            data-wow-duration="0.7s"
            data-wow-delay="0.5s"
          >
            <div className="hero-img">
              <img
                src={BannerImg}
                title="Bheru Lal Gameti"
                alt="Bheru Lal Gameti WordPress Developer"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <a href="mailto:iambherulal@gmail.com" className="hero-email-link">
        iambherulal@gmail.com
      </a>
      <a href="/#" data-scroll-nav="2" className="scroll-down-btn">
        Scroll Down
      </a>
    </section>
  );
}

export default Banner;
