import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./styles.scss";

const AccountItem = () => {
  return (
    <>
      <div className="account">
        <div className="account__content">
          <img
            className="account__content-img"
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fda2cca3e9257c62e6fb3b8e9710184~c5_100x100.jpeg?x-expires=1655373600&x-signature=XZaCAV5UOJQvj1UPGbFGTuF01PA%3D"
            alt="avatar"
          />
          <div className="account__content-info">
            <h4>
              Luci Ana
              <CheckCircleOutlined className="account__content-check" />
            </h4>
            <p>Luci.Ana</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountItem;
