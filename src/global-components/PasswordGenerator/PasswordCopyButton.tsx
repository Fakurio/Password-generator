import React from "react";
import "./PasswordCopyButton.scss";
import CopyIcon from "@/assets/images/copy.svg";

interface Props {
  password: string;
}

const PasswordCopyButton: React.FC<Props> = ({ password }) => {
  return (
    <>
      <button
        className="password-copy-button"
        onClick={() => navigator.clipboard.writeText(password)}
      >
        <img src={CopyIcon}></img>
        <span>Copy Password</span>
      </button>
    </>
  );
};

export default PasswordCopyButton;
