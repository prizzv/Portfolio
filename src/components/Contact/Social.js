import React from 'react'
import { Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaStackOverflow } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Social = () => {
  return (
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/prizzv"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/Shashaa57591191"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <BsTwitterX />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/shashankkota/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          {/* <li className="social-icons">
            <a
              href="https://codeforces.com/profile/prizzv"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <SiCodeforces />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.codechef.com/users/prizziv"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <SiCodechef />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://stackoverflow.com/users/18496393/shashaank-kota"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaStackOverflow />
            </a>
          </li> */}
        </ul>
      </Col>
    </Row>
  )
}

export default Social