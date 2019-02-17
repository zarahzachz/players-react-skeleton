describe('Delete Player', () => {
  beforeEach(() => {
    cy.login();
    cy.server();
    cy.route(
      'DELETE',
      'https://players-api.developer.alchemy.codes/api/players/5b24dd30310d217ff39012c1',
      'fixture:deletePlayer.json',
    );
    cy.route(
      'GET',
      'https://players-api.developer.alchemy.codes/api/players',
      'fixture:getPlayersDeleted.json',
    );
  });

  it('Will delete a player', () => {
    cy.get('.delete')
      .first()
      .click();

    cy.get('.delete').should(($a) => {
      // should have found 2 elements
      expect($a).to.have.length(2);
    });
  });
});
