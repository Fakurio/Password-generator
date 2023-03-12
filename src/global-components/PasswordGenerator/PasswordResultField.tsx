import React from "react";
import "./PasswordResultField.scss";
import RefreshIcon from "@/assets/images/refresh.svg";

interface Props {
  password: string;
  generatePassword: () => void;
}

const PasswordInputField: React.FC<Props> = ({
  password,
  generatePassword,
}) => {
  return (
    <div className="password-field">
      <div>{password}</div>
      <img src={RefreshIcon} alt="refresh icon" onClick={generatePassword} />
    </div>
  );
};

export default PasswordInputField;
