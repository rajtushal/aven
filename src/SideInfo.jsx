import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./sideinfo.css";

function SideInfo({ name }) {
  return (
    <div className="side-info-accordion">
      <h2>Welcome back {name} </h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="rounded-0">
        <Accordion.Item eventKey="0" className="border-0">
          <Accordion.Header>Here is you main teaching video</Accordion.Header>
          <Accordion.Body>
            <p>All base functions in one video explained</p>
            <div className="d-flex ">
              <video className="pe-1" width="40%" height="100%" controls>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
              <video className="ps-1" width="40%" height="100%" controls>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="border-0">
          <Accordion.Header>Dokumentation</Accordion.Header>
          <Accordion.Body className="info-links">
            <p>Here are the project documentation</p>
            <ul className="m-0">
              <li>
                <a href="http://">Main Documentation</a>
              </li>
              <li>
                <a href="http://">Data Export Protokoll</a>
              </li>
              <li>
                <a href="http://">Screenshot Documentation</a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="border-0">
          <Accordion.Header>Support</Accordion.Header>
          <Accordion.Body className="info-links">
            <a href="http://">Go to Support</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="border-0">
          <Accordion.Header>Downloads</Accordion.Header>
          <Accordion.Body className="info-links">
            <a href="http://">Download Handbook</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="border-0">
          <Accordion.Header>Rights</Accordion.Header>
          <Accordion.Body className="info-links">
            <a href="http://" className="d-inline-block">
              User Rights
            </a>
            <a href="http://" className="d-inline-block">
              Group Rights
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SideInfo;
