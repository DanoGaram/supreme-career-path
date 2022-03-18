import React, { ReactElement } from "react";
import { SidebarWrapper } from "./styled";
import { SidebarPropsT } from "./types";

function Sidebar(props: SidebarPropsT): ReactElement {
  return (
    <SidebarWrapper>
      <div className="description">
        This is an example of how you can use the zoom pan helper hook
        <p>{JSON.stringify(props.flowElement)}</p>
      </div>
      <button onClick={props.onClose}>Cerrar</button>
    </SidebarWrapper>
  );
}

export default Sidebar;
