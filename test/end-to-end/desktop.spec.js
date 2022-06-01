context('A - Desktop - From homepage until map navigation', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  describe('Search and navigate trought locations', () => {
    it('should type coordinates and list three closest shops', () => {
      cy.visit('/');
      cy.wait(1000);

      cy.get('main [data-testid="input-search"]').type('-33.45,-70.65');
      cy.get('main [data-testid="button-search"]').click();

      cy.wait(5000);

      cy.get('[data-testid="shops-list--item"]').should('have.length', 3);
    });

    it('should render a map with the closest shop', () => {
      cy.get('[data-testid="map-section"]').should('be.visible');

      cy.get(
        '[data-testid="map-section"] .leaflet-marker-pane img:first'
      ).click();
      cy.get(
        '[data-testid="map-section"] .leaflet-popup-content-wrapper p b'
      ).should('contain', 'NFS Novo Hamburgo');
    });
  });
});
