import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <p className="normal-case text-xl">Placeholder Posts</p>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
