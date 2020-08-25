import * as React from "react";

const Image = (props) => (
  <div style={{ textAlign: "center", fontSize: "11pt", color: "gray" }}>
    <img style={{ display: "block", margin: "10px auto" }} {...props} />
    {props.caption}
  </div>
);

export default Image;