import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

type Color = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

type Props = {
  color: Color;
};

function ColorPanel({ color }: Props) {
  const [colorValue, setColorValue] = useState<Color>(color);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setColorValue((prevColor) => ({
      ...prevColor,
      [name]: name === 'alpha' ? parseFloat(value) : parseInt(value),
    }));
  };

  const { red, green, blue, alpha } = colorValue;
  const backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return (
    <>
      <div className={styles.colorPanelContainer}>
        <div
          className={styles.panel}
          style={{ backgroundColor }}
          data-cy="colorPanelContainer"  // Adicionando o seletor de dados
        ></div>
        <div className={styles.colorInfo} data-cy="inputsRGBA">
          rgba({red}, {green}, {blue}, {alpha})
        </div>
      </div>
      <div className={styles.sliders}>
        <div className={styles.sliderContainer}>
          <label htmlFor="red">R:</label>
          <input
            type="range"
            id="red"
            name="red"
            min="0"
            max="255"
            step="1"
            value={red}
            onChange={handleColorChange}
            data-cy="inputRed"
          />
        </div>
        <div className={styles.sliderContainer}>
          <label htmlFor="green">G:</label>
          <input
            type="range"
            id="green"
            name="green"
            min="0"
            max="255"
            step="1"
            value={green}
            onChange={handleColorChange}
            data-cy="inputGreen"
          />
        </div>
        <div className={styles.sliderContainer}>
          <label htmlFor="blue">B:</label>
          <input
            type="range"
            id="blue"
            name="blue"
            min="0"
            max="255"
            step="1"
            value={blue}
            onChange={handleColorChange}
            data-cy="inputBlue"
          />
        </div>
        <div className={styles.sliderContainer}>
          <label htmlFor="alpha">A:</label>
          <input
            type="range"
            id="alpha"
            name="alpha"
            min="0"
            max="1"
            step="0.1"
            value={alpha}
            onChange={handleColorChange}
            data-cy="inputAlpha"
          />
        </div>
      </div>
    </>
  );
}

ColorPanel.propTypes = {
  color: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired,
    alpha: PropTypes.number.isRequired,
  }).isRequired,
};

export default ColorPanel;
