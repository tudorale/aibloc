import React, { useState, useEffect, useCallback } from "react";

import ReactFlow, {
  isEdge,
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";

import ColorSelectorNode from "./CustomInputNode";
import CustomStackNode from "./CustomComponent";

// import './index.css';

const onNodeDragStop = (event, node) => console.log("drag stop", node);
const onElementClick = (event, element) => console.log("click", element);

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#fff" };
const nodeTypes = {
  selectorNode: ColorSelectorNode,
  layerStackNode: CustomStackNode,
};

const CustomNodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const onChange = (event) => {
      setElements((els) =>
        els.map((e) => {
          if (isEdge(e) || e.id !== "2") {
            return e;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...e,
            data: {
              ...e.data,
              color,
            },
          };
        })
      );
    };

    setElements([
      {
        id: "1",
        type: "selectorNode",
        style: {
          border: "1px solid #0041D0",
          padding: 10,
          borderRadius: "3px",
        },
        position: { x: 300, y: 0 },
      },
      {
        id: "2",
        type: "default",
        data: { label: "RNN Layer" },
        position: { x: 400, y: 125 },
      },
      {
        id: "3",
        type: "default",
        data: { label: "LSTM Layer" },
        position: { x: 400, y: 190 },
      },
      {
        id: "5",
        type: "default",
        data: { label: "DenseLayer" },
        position: { x: 400, y: 255 },
      },
      {
        id: "4",
        type: "layerStackNode",
        data: { label: "Visualization Component " },
        position: { x: 120, y: 190 },
      },
      {
        id: "6",
        type: "output",
        data: { label: "Output" },
        position: { x: 283, y: 320 },
      },
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "smoothstep",
        label: "Deep Learning Model",
        labelStyle: { fill: "#B1B1B7", fontWeight: 700 },
        animated: true,
        arrowHeadType: "arrowclosed",
      },
      {
        id: "e2-3",
        source: "2",
        target: "3",
        type: "smoothstep",
        animated: true,
        arrowHeadType: "arrowclosed",
      },
      {
        id: "e3-5",
        source: "3",
        target: "5",
        type: "smoothstep",
        animated: true,
        arrowHeadType: "arrowclosed",
      },
      {
        id: "e1-4",
        source: "1",
        target: "4",
        type: "smoothstep",
        animated: true,
        style: { stroke: "#f6ab6c" },
        label: "Automatic Data Processing",
        labelStyle: { fill: "#f6ab6c", fontWeight: 700 },
        arrowHeadType: "arrowclosed",
      },
      {
        id: "e4-6",
        source: "4",
        target: "6",
        type: "smoothstep",
        animated: true,
        style: { stroke: "#f6ab6c" },
        arrowHeadType: "arrowclosed",
      },
      {
        id: "e5-6",
        source: "5",
        target: "6",
        type: "smoothstep",
        animated: true,
        arrowHeadType: "arrowclosed",
      },
    ]);
  }, []);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge(
          {
            ...params,
            animated: true,
            arrowHeadType: "arrowclosed",
            type: "smoothstep",
          },
          els
        )
      ),
    []
  );

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log("flow loaded:", rfi);
      }
    },
    [reactflowInstance]
  );

  return (
    <div id="inside">
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
        nodeTypes={nodeTypes}
      >
        {/* <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === "input") return "#0041d0";
            if (n.type === "output") return "#ff0072";
            if (n.type === "default") return "#1a192b";

            return "#eee";
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;

            return "#fff";
          }}
          nodeBorderRadius={2}
        /> */}
        <Controls />
        <Background color="#6C63FF" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
