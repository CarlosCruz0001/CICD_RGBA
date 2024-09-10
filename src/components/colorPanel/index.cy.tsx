import ColorPanel from "./index";

describe('<ColorPanel />', () => {


  it('should exhibit the right color', () => {

    const color = { 
      red: 255,
      green: 118,
      blue: 18,
      alpha: 0.6 
    };


    cy.mount(<ColorPanel color={color} />);


    cy.get('[data-cy="colorPanelContainer"]')
      .should('have.css', 'background-color') 
      .and('match', new RegExp(`rgba\\(${color.red}, ${color.green}, ${color.blue}, ${color.alpha}\\)`)); 
  });


  it('should exhibit a transparent background', () => {

    const color = { 
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0 
    };

    cy.mount(<ColorPanel color={color} />);


    cy.get('[data-cy="colorPanelContainer"]')
      .should('have.css', 'background-color')
      .and('match', new RegExp(`rgba\\(${color.red}, ${color.green}, ${color.blue}, ${color.alpha}\\)`));
  });


  it('should update the RGBA values when sliders are adjusted', () => {

    const red = 100;
    const green = 100;
    const blue = 100;
    const alpha = 0.6;

 
    cy.mount(<ColorPanel color={{ red, green, blue, alpha }} />);


    cy.get('[data-cy="inputRed"]').invoke('val', red).trigger('change');
    cy.wait(500); 
    cy.get('[data-cy="inputGreen"]').invoke('val', green).trigger('change');
    cy.wait(500);
    cy.get('[data-cy="inputBlue"]').invoke('val', blue).trigger('change');
    cy.wait(500);
    cy.get('[data-cy="inputAlpha"]').invoke('val', alpha).trigger('change');
    cy.wait(500);

 
    const roundedAlpha = alpha.toFixed(1);

    cy.get('[data-cy="colorPanelContainer"]').should("have.css", "background-color")
      .and('match', new RegExp(`rgba\\(${red}, ${green}, ${blue}, ${roundedAlpha}\\)`));
  });
});
