import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles.scss";

const AccountItem = ({ data }) => {
  const { avatar, full_name, nickname, tick } = data;
  return (
    <>
      <Link to={`/@${nickname}`}>
        <div className="account">
          <div className="account__content">
            <img className="account__content-img" src={avatar} alt="avatar" />
            <div className="account__content-info">
              <h4>
                {full_name}
                {tick && (
                  <CheckCircleOutlined className="account__content-check" />
                )}
              </h4>
              <p>{nickname}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AccountItem;
