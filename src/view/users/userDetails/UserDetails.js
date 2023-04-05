import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import "../Users.css"
const UserDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <div
          style={{ width: "100%", backgroundColor: "#00435e", color: "#fff" }}
        >
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
              <h5 className="m-0 p-0 ps-md-5 pe-sm-3">Helvit</h5>
            </Col>
          </div>
        </div>
      </Row>
      <Row
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        className="pt-5"
      >
        <Col md={4} xs={11}>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Name" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Mobile Number">
            <Form.Control
            className="mb-3"
              type="number"
              placeholder="Mobile Number
"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>

          <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Address"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Address" />
          </FloatingLabel>

          <FloatingLabel className="mb-3" controlId="floatingPassword" label="State">
            <Form.Control
              type="text"
              placeholder="State"
              />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="District"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="District" />
          </FloatingLabel>

          <FloatingLabel className="mb-3" controlId="floatingPassword" label="Pincode">
            <Form.Control type="number" placeholder="Pincode" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="pb-5 mb-5 bt-box" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}} md={4} xs={10} >
        <Button variant="outline-primary" className="bt4 mt-5 " >Logout</Button>
        </Col>
      </Row>
    </>
  );
};

export default UserDetails;
