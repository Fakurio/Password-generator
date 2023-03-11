import React from "react";
import "./CharacterLengthSlider.scss";

interface Props {
  passwordLength: number;
  handlePasswordLengthChange: (length: number) => void;
}

const CharacterLengthSlider: React.FC<Props> = ({
  passwordLength,
  handlePasswordLengthChange,
}) => {
  return (
    <>
      <p className="slider-label">
        Character Length <span>{passwordLength}</span>
      </p>
      <input
        className="slider"
        type="range"
        min={4}
        max={16}
        value={passwordLength}
        onChange={(e) => handlePasswordLengthChange(parseInt(e.target.value))}
      ></input>
    </>
  );
};

export default CharacterLengthSlider;
