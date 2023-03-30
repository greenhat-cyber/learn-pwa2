import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const Default = () => {
  let auth = localStorage.getItem("token")
  return (
    <>
      {/* <aside style={{ position: "fixed" }}>
        <Sidebar />
      </aside> */}
      <>{auth ? <Outlet /> : <Navigate to={"/login"} />}</>
    </>
  );
};

export default Default;
