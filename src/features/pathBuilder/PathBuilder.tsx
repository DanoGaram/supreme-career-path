import React, { ReactElement, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Elements,
  FlowElement,
  OnLoadParams,
} from "react-flow-renderer";
import Sidebar from "./sidebar/Sidebar";
import { PathBuilderWrapper } from "./styled";

const elements: Elements = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output", // output node
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: "e1-2", source: "1", target: "2", animated: true, type: "step" },
  { id: "e2-3", source: "2", target: "3" },
];

function PathBuilder(): ReactElement {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedNode, setSelectedNode] = useState<FlowElement>();
  const onLoad = (reactFlowInstance: OnLoadParams) => {
    console.log("flow loaded:", reactFlowInstance);
    reactFlowInstance.fitView();
  };
  const onSelectNode = (elements: Elements) => {
    console.log("seleccionados", elements);
    if (elements) {
      setShowSidebar(true);
      setSelectedNode(elements[0]);
    } else {
      setShowSidebar(false);
      setSelectedNode(null);
    }
  };
  return (
    <PathBuilderWrapper>
      <ReactFlow
        elements={elements}
        onLoad={onLoad}
        elementsSelectable
        onSelectionChange={onSelectNode}
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      {showSidebar && (
        <Sidebar
          flowElement={selectedNode}
          onClose={() => setShowSidebar(false)}
        />
      )}
    </PathBuilderWrapper>
  );
}

export default PathBuilder;
