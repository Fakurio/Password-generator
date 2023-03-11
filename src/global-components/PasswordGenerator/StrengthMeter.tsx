import React from "react";
import "./StrengthMeter.scss";
import { PasswordStrength } from "@/types/PasswordStrength";

interface Props {
  passwordStrength: PasswordStrength;
}

const StrengthMeter: React.FC<Props> = ({ passwordStrength }) => {
  return (
    <div className="strength-meter">
      <p>
        Strength <span>{passwordStrength.info}</span>
      </p>
      <meter
        className="strength-meter__indicator"
        min={0}
        max={4}
        value={passwordStrength.strength}
      ></meter>
      <div className="meter__segments">
        <span className="segment"></span>
        <span className="segment"></span>
        <span className="segment"></span>
      </div>
    </div>
  );
};

export default StrengthMeter;
