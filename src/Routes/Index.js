import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Default from "../layout/Default";
import SignIn from "../view/auth/sign-in/SignIn";
import Dashboard from "../view/dashboard/Dashboard";

const IndexRouters = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
});

IndexRouters.displayName = "IndexRouters";
export default IndexRouters;
