import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Default from "../layout/Default";
import SignIn from "../view/auth/sign-in/SignIn";
import Dashboard from "../view/dashboard/Dashboard";
import Users from "../view/users/Users";
import ScanQrcode from "../view/Scan Qrcode/scan-qrcode";
import UserDetails from "../view/users/userDetails/UserDetails";

const IndexRouters = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/scan-qrcode" element={<ScanQrcode />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Route>

      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
});

IndexRouters.displayName = "IndexRouters";
export default IndexRouters;
