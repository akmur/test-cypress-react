beforeEach(() => {
  cy.intercept("GET", "https://jsonplaceholder.typicode.com/users/1/posts", {
    statusCode: 500 // we mock the response status code
  }).as("postsList");

  cy.visit("/");
});

it("There is an error", () => {
  cy.wait("@postsList").then(json => {
    // waiting for the response, then...
    expect(json.response.statusCode).to.equal(500); // expect a 500
  });
});
