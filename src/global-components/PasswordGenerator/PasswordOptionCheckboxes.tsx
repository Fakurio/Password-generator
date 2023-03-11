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
  return (
    <div className="checkbox-list">
      <div className="checkbox-list__col">
        <label>
          <input
            type="checkbox"
            onChange={() => handleChange("upLetter")}
            checked={checkboxState["upLetter"]}
          ></input>
          Include Uppercase Letter
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleChange("lowLetter")}
            checked={checkboxState["lowLetter"]}
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
          ></input>
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleChange("symbol")}
            checked={checkboxState["symbol"]}
          ></input>
          Include Symbols
        </label>
      </div>
    </div>
  );
};

export default PasswordOptionsCheckboxes;
