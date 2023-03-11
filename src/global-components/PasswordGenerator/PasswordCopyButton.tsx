import React from "react";
import "./PasswordCopyButton.scss";
import CopyIcon from "@/assets/images/copy.svg";

const PasswordCopyButton: React.FC = () => {
  return (
    <>
      <button className="password-copy-button">
        <img src={CopyIcon}></img>Copy Password
      </button>
    </>
  );
};

export default PasswordCopyButton;
