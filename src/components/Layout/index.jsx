import React from "react";

import { Col, Row } from "antd";

import Header from "../Header";
import Sidebar from "../Sidebar";
import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="layout ">
        <Row className="layout-sidebar">
          <Col span={12}>
            <Sidebar></Sidebar>
          </Col>
          <Col span={12} className="layout-content">
            {children}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Layout;
