import React, { memo } from "react";

import { Handle } from "react-flow-renderer";
import "./node.css";

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
      <Handle
        type="target"
        position="top"
        className="layerStackNodeHandle stackTopHandle"
      />
      <div style={{ padding: "15px" }}>{data.label}</div>
      <Handle
        type="source"
        position="bottom"
        className="layerStackNodeHandle stackBottomHandle"
      />
    </div>
  );
});
