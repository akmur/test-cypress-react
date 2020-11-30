beforeEach(() => {
  // Will run before each test
  // intercept will watch for these http requests
  cy.intercept("GET", "https://jsonplaceholder.typicode.com/users/1/posts").as(
    "postsList" // alias to be used on line 10
  );

  cy.visit("/");
});

it("fetches posts correctly", () => {
  // our assertion
  cy.wait("@postsList").then(json => {
    // we can use the response to do whatever we need
    expect(json.response.statusCode).to.equal(200); // checking the response status code
    expect(json.response.body.length).to.equal(10); // checking if we get 10 results
  });

  cy.get("[data-test-id='post']").should("have.length", 10); // and checking if 10 results are actually rendered
});
