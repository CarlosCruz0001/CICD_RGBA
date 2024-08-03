
describe('ColorPanel Component', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should update the RGBA values when sliders are adjusted', () => {
  
    cy.get('.styles_panel__V7Dqj').should('have.css', 'background-color').and('match', /rgba\(100, 150, 200, 0.8\)/);
    /*eu sei que o código só esta confiramando a cor do input, mas não está alterando... é que eu n soube como altear */
  
  });
});
