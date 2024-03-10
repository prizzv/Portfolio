import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Shashank Kota</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/prizzv"
                style={{ color: "#eccb0c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Shashaa57591191"
                style={{ color: "#eccb0c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shashankkota/"
                style={{ color: "#eccb0c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/prizzv"
                style={{ color: "#eccb0c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodeforces />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/prizziv"
                style={{ color: "#eccb0c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodechef />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/18496393/shashaank-kota"
                style={{ color: "#eccb0c" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaStackOverflow />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
