import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import "./admin.css";
import Search from "./../BootCamp/Search";
const AdminMain = () => {
  return (
    <div className="adminMain">
      <section className="adminLeft">
        <AdminSidebar />
      </section>
      <section className="adminRight">
        <aside>
          <Search />
        </aside>
        <aside>
          <section
            className="mainContent"
            style={{ padding: "20px 0", overflow: "scroll" }}
          >
            <Outlet />
          </section>
        </aside>
      </section>
    </div>
  );
};

export default AdminMain;
