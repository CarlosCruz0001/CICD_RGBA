import React from 'react'
import ColorPanel from './index'
import styles from "./styles.module.css";

describe('<ColorPanel />', () => {
    it('should exhibit the right color', () => {
      const color1 = { 
        red: 255,
        green: 118,
        blue: 18,
        alpha: 0.6 
      };
  
      cy.mount(<ColorPanel color={color1} />);
  

      const expectedRgbaColor = `rgba(${color1.red}, ${color1.green}, ${color1.blue}, ${color1.alpha})`;
  
      cy.get(`.${styles.panel}`)
        .should('have.css', 'background-color', expectedRgbaColor);
    });

    it('should exhibit a transparent background', () => {
        const color1 = { 
          red: 0,
          green: 0,
          blue: 0,
          alpha: 0 
        };
    
        cy.mount(<ColorPanel color={color1} />);
    
    
        const expectedRgbaColor = `rgba(${color1.red}, ${color1.green}, ${color1.blue}, ${color1.alpha})`;
    
        cy.get(`.${styles.panel}`)
          .should('have.css', 'background-color', expectedRgbaColor);
      });


  });
  