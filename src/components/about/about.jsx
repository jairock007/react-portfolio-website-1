import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="jitendra" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about-card" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about_card">
              <FiUsers className="about-card" />
              <h5>Clients</h5>
              <small>10+ India</small>
            </article>
            <article className="about_card">
              <VscFolderActive className="about-card" />
              <h5>Projects</h5>
              <small>14+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            provident, ab ipsum asperiores excepturi sequi tempora consequuntur
            accusamus veniam distinctio, doloremque quasi libero, eveniet
            ducimus qui nobis iusto sint voluptatem?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
