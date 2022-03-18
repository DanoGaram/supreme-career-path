import { FlowElement } from "react-flow-renderer";

export interface SidebarPropsT {
  flowElement: FlowElement;
  onClose: () => void;
}
