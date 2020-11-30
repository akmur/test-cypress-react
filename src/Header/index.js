import styled from "styled-components";

const Container = styled.h3`
  background: var(--header-bg);
  color: var(--header-text);
  padding: 1em;
  border-radius: 0.25em;
`;

const Header = props => {
  return <Container data-test-id="header">Testing with Cypress</Container>;
};

export default Header;
