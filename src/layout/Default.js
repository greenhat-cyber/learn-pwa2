import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import BottomNav from "../Components/nav/BottomNav";

const Default = () => {
  let auth = localStorage.getItem("token");
  return (
    <>
      {/* <aside style={{ position: "fixed" }}>
        <Sidebar />
      </aside> */}
      <>
        {auth ? (
          <>
            <Outlet />

            <BottomNav />
          </>
        ) : (
          <Navigate to={"/login"} />
        )}
      </>
    </>
  );
};

export default Default;
