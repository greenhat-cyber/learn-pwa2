import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import "./qrCode.css";

const ScanQrcode = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#00435e", color: "#fff" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          className="row p-4"
        >
          <Col md={5} xs={4}>
            <ImArrowLeft2
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col
            md={7}
            xs={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* <h5 className="m-0 p-0 ps-md-5 pe-sm-3">Personal Details</h5> */}
          </Col>
        </div>
      </div>
      <Row className="pt-5">
        <Col
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png"
            alt="qr-code"
            style={{ width: "200px", height: "200px" }}
          />
        </Col>
      </Row>
      <Row className="pt-5">
        <Col
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button className="bt" variant="outline-primary">
            Sample Images
          </Button>
        </Col>
      </Row>
      <Row
        className="pt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          md={12}
          xs={10}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button className="bt2">Scan Now</Button>
        </Col>
      </Row>
    </>
  );
};

export default ScanQrcode;
