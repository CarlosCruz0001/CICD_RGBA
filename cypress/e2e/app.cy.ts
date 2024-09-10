describe("ColorPanel Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should update the RGBA values when sliders are adjusted", () => {
  const red = 100;
    const green = 100;
    const blue = 100;
    const alpha = 0.6;

    cy.get('[data-cy="colorPanelContainer"]').should("be.visible");

    cy.get('[data-cy="inputRed"]').type(red.toString()).trigger("change");
    cy.wait(500);
    cy.get('[data-cy="inputGreen"]').type(green.toString()).trigger("change");
    cy.wait(500);
    cy.get('[data-cy="inputBlue"]').type(blue.toString()).trigger("change");
    cy.wait(500);
    cy.get('[data-cy="inputAlpha"]').type(alpha.toString()).trigger("change");
    cy.wait(500);

    const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    cy.wait(500);

    cy.get('[data-cy="colorPanelContainer"]').should("have.css", "background-color", color);
  });
});
