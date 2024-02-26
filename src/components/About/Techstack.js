import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit, DiJava, DiJavascript1, DiNodejs, DiPostgresql, DiPython } from "react-icons/di";
import { SiFirebase, SiFlask, SiGooglecolab, SiMongodb, SiMysql, SiRedis, SiTypescript, SiExpress, SiNestjs } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";

import flutterHiveImg from "../../Assets/flutter_hive.png";
import { SiFlutter } from "react-icons/si";
import dart from "../../Assets/dartlang-icon.svg";
import dynamoDb from "../../Assets/aws-dynamodb.svg";

function renderTooltip(text) {
  return <Tooltip id="tooltip">{text}</Tooltip>;
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger placement="bottom" overlay={renderTooltip("C++")}>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("JavaScript")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("TypeScript")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Python")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Dart")}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={dart}></img>
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Java")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("MongoDB")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("MySQL")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("DynamoDB")}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={dynamoDb} className="tech-image"></img>
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Firebase")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Flutter Hive")}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={flutterHiveImg} className="tech-image"></img>
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("PostgreSQL")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPostgresql />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Node.js")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Express.js")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Nest.js")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Flutter")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlutter />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Android")}>
        <Col xs={4} md={2} className="tech-icons">
          <FaAndroid />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Redis")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Git")}>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Flask")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Google Colab")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecolab />
        </Col>
      </OverlayTrigger>

    </Row>
  );
}

export default Techstack;
