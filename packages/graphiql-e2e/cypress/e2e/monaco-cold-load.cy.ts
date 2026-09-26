describe('Monaco cold load', () => {
  it('pairs brackets before the GraphQL language definition finishes loading', () => {
    cy.intercept('GET', '**/assets/graphql-*.js', request => {
      request.continue(response => {
        if (
          typeof response.body === 'string' &&
          response.body.includes('autoClosingPairs') &&
          response.body.includes('defaultToken')
        ) {
          response.setDelay(2_000);
        }
      });
    });

    cy.visitGraphiQL({ query: '' });
    cy.get('.graphiql-query-editor .view-lines').realClick();
    cy.realPress('{');

    cy.window().then(win => {
      const model = win.__MONACO.editor
        .getModels()
        .find(candidate => candidate.uri.path.endsWith('operation.graphql'))!;

      expect(model.getValue()).to.equal('{}');
    });
  });
});
