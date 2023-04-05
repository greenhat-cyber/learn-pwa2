import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Users.css";

import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const handlLogOut= ()=>{
    localStorage.removeItem("token")
    navigate("/login")

  }
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
            <h5 className="m-0 p-0 ps-md-5 pe-sm-3">Personal Details</h5>
          </Col>
        </div>
      </div>
      <Row style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
        <Col
          md={12}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaUserCircle
            style={{ fontSize: "11rem", color: "#01435f" }}
            className="pt-4"
          />
          <h6 className="pt-3">User 1</h6>
        </Col>
        <Col md={4} xs={10} onClick={()=>navigate("/user-details")}  >
          <div
            className="mt-2"
            style={{
              
              height: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: "10px",
              boxShadow: "0px 0px 4px 1px #00435e34",
              cursor: "pointer",
            }}
          >
            <p className="p-0 m-0">Edit Profile Details</p>
            <IoIosArrowForward className="p-0 m-0" />
          </div>
        </Col>
      </Row>
      <Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}} md={4} xs={10} >
        <Button variant="outline-primary" className="bt4 mt-5 " onClick={handlLogOut} >Logout</Button>
        </Col>
      </Row>
    </>
  );
};

export default Users;
