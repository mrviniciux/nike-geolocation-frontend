context('B - Mobile - From homepage until map navigation', () => {
  beforeEach(() => {
    cy.viewport(414, 896);
  });

  describe('Search and navigate trought locations', () => {
    it('should type coordinates and list three closest shops', () => {
      cy.visit('/');
      cy.wait(1000);

      cy.get('main [data-testid="input-search"]').type('-33.45,-70.65');
      cy.get('main [data-testid="button-search"]').click();

      cy.wait(1000);

      cy.get('[data-testid="shops-list--item"]').should('have.length', 3);
    });

    it('expect map to not be visible at first moment', () => {
      cy.get('[data-testid="map-section"]').should('not.be.visible');
    });

    it('Should click on the first shop and show the map', () => {
      cy.get('a#viewLocationMobile').first().click();
      cy.wait(4000);
      cy.get('[data-testid="map-section"]').should('be.visible');
    });
  });
});
