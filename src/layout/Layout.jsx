import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto px-4 lg:px-20 py-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;