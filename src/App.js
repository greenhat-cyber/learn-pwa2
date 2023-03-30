import React from "react";
import IndexRouters from "./Routes/Index";
import SignIn from "./view/auth/sign-in/SignIn";
import Dashboard from "./view/dashboard/Dashboard";

const App = () => {
  return (
    <>
      {/* <SignIn/> */}
      {/* <Dashboard/> */}
      <IndexRouters />
      {/* <h1>test</h1> */}
    </>
  );
};

export default App;
