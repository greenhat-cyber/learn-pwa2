import React from "react";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center pb-5"
      
    >
      <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_RFNgvE4a3t.json"
        background="transparent"
        speed="1"
        style={{ width: "280px", height: "280px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loading;
