import React from "react";
import { useState, useEffect } from "react";
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
    upperCase: true,
    lowerCase: false,
    number: true,
    symbol: true,
  });
  const [passwordLength, setPasswordLength] = useState<number>(6);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    strength: 0,
    info: "",
  });
  const [password, setPassword] = useState<string>("");

  const handlePasswordOptionsChange = (value: string) => {
    setPasswordOptions({
      ...passwordOptions,
      [value]: !passwordOptions[value],
    });
  };

  const handlePasswordLengthChange = (length: number) => {
    setPasswordLength(length);
  };

  const handlePasswordStrengthChange = () => {
    let optionsCheckedNumber = 0;
    // for (const [key, value] of Object.entries(passwordOptions)) {
    //   if (value) optionsCheckedNumber++;
    // }
    for (const key in passwordOptions) {
      if (passwordOptions[key]) optionsCheckedNumber++;
    }

    if (passwordLength >= 14 && optionsCheckedNumber === 4) {
      setPasswordStrength(passwordStrengthOptions[3]);
    } else if (passwordLength >= 10 && optionsCheckedNumber > 2) {
      setPasswordStrength(passwordStrengthOptions[2]);
    } else if (passwordLength >= 7 && optionsCheckedNumber >= 2) {
      setPasswordStrength(passwordStrengthOptions[1]);
    } else {
      setPasswordStrength(passwordStrengthOptions[0]);
    }
  };

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!#$%^&*+-_/<>?=@[]~|";

    let charset = "";
    if (passwordOptions["upperCase"]) charset += upperCase;
    if (passwordOptions["lowerCase"]) charset += lowerCase;
    if (passwordOptions["number"]) charset += numbers;
    if (passwordOptions["symbol"]) charset += symbols;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(password);
  };

  useEffect(() => {
    generatePassword();
    handlePasswordStrengthChange();
  }, [passwordLength, passwordOptions]);

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
      <PasswordResultField
        password={password}
        generatePassword={generatePassword}
      />
      <PasswordCopyButton password={password} />
    </div>
  );
};

export { PasswordGenerator };
