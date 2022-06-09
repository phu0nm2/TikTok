import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
