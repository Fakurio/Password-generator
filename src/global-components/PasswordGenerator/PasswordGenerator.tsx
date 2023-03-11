import React from "react";
import { useState } from "react";
import "./PasswordGenerator.scss";
import { CheckboxState } from "@/types/CheckboxState";
import { PasswordStrength } from "@/types/PasswordStrength";
import CharacterLengthSlider from "./CharacterLengthSlider";
import PasswordOptionsCheckboxes from "./PasswordOptionCheckboxes";
import StrengthMeter from "./StrengthMeter";
import PasswordResultField from "./PasswordResultField";
import PasswordCopyButton from "./PasswordCopyButton";

const PasswordGenerator: React.FC = () => {
  const passwordStrengthOptions: PasswordStrength[] = [
    { strength: 1, info: "Low password strength" },
    { strength: 2, info: "Low password strength" },
    { strength: 3, info: "Average password strength" },
    { strength: 4, info: "High password strength" },
  ];

  const [passwordOptions, setPasswordOptions] = useState<CheckboxState>({
    upLetter: true,
    lowLetter: false,
    number: true,
    symbol: true,
  });
  const [passwordLength, setPasswordLength] = useState<number>(6);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(
    passwordStrengthOptions[2]
  );

  const handlePasswordOptionsChange = (value: string) => {
    setPasswordOptions({
      ...passwordOptions,
      [value]: !passwordOptions[value],
    });
  };

  const handlePasswordLengthChange = (length: number) => {
    setPasswordLength(length);
  };

  return (
    <div className="generator">
      <h1 className="generator__heading">Password Generator</h1>
      <CharacterLengthSlider
        passwordLength={passwordLength}
        handlePasswordLengthChange={handlePasswordLengthChange}
      />
      <PasswordOptionsCheckboxes
        checkboxState={passwordOptions}
        handleChange={handlePasswordOptionsChange}
      />
      <StrengthMeter passwordStrength={passwordStrength} />
      <PasswordResultField />
      <PasswordCopyButton />
    </div>
  );
};

export { PasswordGenerator };
