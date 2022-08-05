import React from "react";
import "./WidthSpecific.css";
const WidthSpecific = (props) => {
  return (
    // This component for the width of our whole screen that we set 75em width
    // we are going to call it in multiple containers

    <div className="flex-center-container-for-75-em">
      {/* from here we pass the props to the children components or sections that we have */}
      <div className="width-75-em">{props.children}</div>
    </div>
  );
};

export default WidthSpecific;
