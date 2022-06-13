import React from "react";

import { Col, Row } from "antd";

import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.scss";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header></Header>
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

export default DefaultLayout;
