import React from "react";
import "./PasswordOptionsCheckboxes.scss";
import { CheckboxState } from "@/types/CheckboxState";

interface Props {
  handleChange: (value: string) => void;
  checkboxState: CheckboxState;
}

const PasswordOptionsCheckboxes: React.FC<Props> = ({
  handleChange,
  checkboxState,
}) => {
  const isCheckboxDisabled = (checkboxText: string) => {
    for (const [key, value] of Object.entries(checkboxState)) {
      if (key !== checkboxText && value === true) return false;
    }
    return true;
  };

  return (
    <div className="checkbox-list">
      <div className="checkbox-list__col">
        <label>
          <input
            type="checkbox"
            onChange={() => handleChange("upperCase")}
            checked={checkboxState["upperCase"]}
            disabled={isCheckboxDisabled("upperCase")}
          ></input>
          Include Uppercase Letter
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleChange("lowerCase")}
            checked={checkboxState["lowerCase"]}
            disabled={isCheckboxDisabled("lowerCase")}
          ></input>
          Include Lowercase Letter
        </label>
      </div>
      <div className="checkbox-list__col">
        <label>
          <input
            type="checkbox"
            onChange={() => handleChange("number")}
            checked={checkboxState["number"]}
            disabled={isCheckboxDisabled("number")}
          ></input>
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleChange("symbol")}
            checked={checkboxState["symbol"]}
            disabled={isCheckboxDisabled("symbol")}
          ></input>
          Include Symbols
        </label>
      </div>
    </div>
  );
};

export default PasswordOptionsCheckboxes;
