import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { BsArrowUpCircle,BsArrowDownCircle } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={12} sm={12} className="text-center p-4">
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
        className="gap-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          md={6}
          sm={6}
          xs={6}
          style={{
            backgroundColor: "#00435e",
            color: "#fff",
            borderRadius: "10px",
            width: "40%",
            height:"266px",
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <BsArrowDownCircle className="fs-3 mb-4 mt-5" />
            <h1 className="mb-4" >0</h1>
            <p className="fw-bold">Point Added</p>
        </Col>
        <Col
          md={6}
          sm={6}
          xs={6}
          style={{
            backgroundColor: "#d8e3e8",
            color: "#00435e",
            borderRadius: "10px",
            width: "40%",
            height:"266px",
            
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
          
        >
          <BsArrowUpCircle className="fs-3 mb-4 mt-5" />
            <h1 className="mb-4" >0</h1>
            <p className="fw-bold">Point Redeemed</p>
         
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
