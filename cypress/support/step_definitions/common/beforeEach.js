const { TestPage } = require('../../../src/pages/testPage');

beforeEach(() => {
  cy.log("This will run before every scenario");
  cy.fixture("dataset.json").then((dataset) => {
    cy.fixture("environment.json").then((env) => {
      var initial_bag = {
        environment: env,
        data: dataset,
        pages: {
          "test": new TestPage()
        }
      };
      cy.wrap(initial_bag).as('bag');
    });
  });
});


