import React from "react";
import { mount } from "cypress-react-unit-test";
import Posts from "./index";

describe("Check that posts exists and there are 10 of them", () => {
  it('renders the text "Learn React"', () => {
    mount(<Posts />);

    cy.get("[data-test-id='posts']").should("exist");

    cy.get("[data-test-id='post'").should("have.length", 10);
  });
});
