import Sidebar from "../SideBar";
import Top from "./Top";
import "./style.scss";

type Props = {
  children?: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <div className="container-fluid m-0 p-0">
      <Sidebar />
      <div className="mainContent">
        <Top />
        <div className="bottom">{props.children}</div>
      </div>
    </div>
  );
};
