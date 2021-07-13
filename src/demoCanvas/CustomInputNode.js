import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  return (
    <div
      style={{
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
      }}
    >
      <div>
        <div style={{ textAlign: "center" }}>Input</div>
        <select name="demoSelect" defaultValue="time_series">
          <option value="select">Select:</option>
          <option value="numerical">Numerical</option>
          <option value="categorical">Categorical</option>
          <option value="time_series">Time Series</option>
          <option value="text">Text</option>
        </select>
      </div>
      <Handle
        type="source"
        position="bottom"
        // id="a"
        // style={{ top: 10, background: "#555" }}
      />
      {/* <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
      /> */}
    </div>
  );
});
