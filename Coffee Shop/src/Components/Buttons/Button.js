import React from "react";
import "./Button.css";

const Button = () => {
  return (
    // Here is the code for read more and view more buttons that we are going to call in multiple container/sections
    <div className="containing-two-btns">
      {/* read more button */}
      <button className="border-2 readmore-btn ">Read More</button>
      {/* view more button */}
      <button className="border-2 viewmore-btn ml-6 ">view More</button>
    </div>
  );
};

export default Button;
