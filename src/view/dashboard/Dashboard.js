import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./dashboard.css"
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import Pending from "./Pending/Pending";
import Statement from "./Statement/Statement";
import Rejected from "./Rejected/Rejected";

const Dashboard = () => {
  const [key, setKey] = useState("pending");
  return (
    <Container>
      <Row>
        <Col md={12} sm={12} className="text-center">
          <h3>Helvit</h3>
        </Col>
      </Row>

      <Row>
        <Col
          md={12}
          sm={12}
          className="text-center p-4 d-flex flex-row align-items-center justify-content-center"
        >
          <h1>0</h1>
          <p className="pt-3 ps-2">Balance</p>
        </Col>
      </Row>

      <Row
        className=" gap-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          md={6}
          xs={6}
          style={{
            backgroundColor: "#00435e",
            color: "#fff",
            borderRadius: "10px",
            width: "45%",
            height: "230px",
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <BsArrowDownCircle className="fs-3 mb-4 mt-5" />
          <h1 className="mb-4">0</h1>
          <p className="fw-bold">Point Added</p>
        </Col>
        <Col
          md={6}
          xs={6}
          style={{
            backgroundColor: "#d8e3e8",
            color: "#00435e",
            borderRadius: "10px",
            width: "45%",
            height: "230px",

            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <BsArrowUpCircle className="fs-3 mb-4 mt-5" />
          <h1 className="mb-4">0</h1>
          <p className="fw-bold">Point Redeemed</p>
        </Col>
      </Row>

      <Row
        className="pt-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="pending" title="Pending">
              <Pending />
            </Tab>
            <Tab eventKey="statement" title="Statement">
              <Statement />
              </Tab>
              <Tab eventKey="rejected" title="Rejected">
              <Rejected />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
