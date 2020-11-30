import React from "react";
import { mount } from "cypress-react-unit-test";
import PostItem from "./PostItem";

describe("<PostItem />", () => {
  beforeEach(() => {
    const post = {
      id: 1,
      title: "lorem ipsum",
      body: "lorem ipsum sit amet"
    };
    mount(<PostItem {...post} />);
  });

  it("exists", () => {
    cy.get("[data-test-id='post']").should("exist");
  });

  it("when clicking on the button, it shows the content", () => {
    cy.get('[data-test-id="button"').click();

    cy.get('[data-test-id="body"')
      .should("be.visible")
      .should("contain.text", "lorem ipsum sit amet");
  });
});
