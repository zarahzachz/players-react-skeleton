describe('Login Page', () => {
  it('Contains email and password labels', () => {
    cy.visit('/login');
    cy.contains('Email');
    cy.contains('Password');
  });

  it('Accepts valid email and password', () => {
    cy.visit('/login');
    cy.get('#email').type('billybob@example.com');
    cy.get('#password').type('abc123');
    cy.login();
    cy.url().should('eq', 'http://localhost:3000/roster');
    cy.contains('Roster');
  });
});
