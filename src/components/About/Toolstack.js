import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJira,
  SiVercel,
  SiAndroidstudio,
  SiNotion,
  SiIntellijidea,
} from "react-icons/si";
import { IoLogoWindows } from "react-icons/io";

function renderTooltip(text) {
  return <Tooltip id="tooltip">{text}</Tooltip>;
}

function Toolstack() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger placement="bottom" overlay={renderTooltip("Windows")}>
        <Col xs={4} md={2} className="tech-icons">
          <IoLogoWindows />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Visual Studio Code")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Android Studio")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Postman")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Jira")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Vercel")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Notion")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNotion />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("IntelliJ IDEA")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiIntellijidea />
        </Col>
      </OverlayTrigger>

    </Row>
  );
}

export default Toolstack;
