import React, { useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid var(--background-mid);
  padding: 2rem 0;
`;

const Body = styled.div`
  font-size: 1.2rem;
  padding-top: 0.5rem;
`;

const Title = styled.h6``;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button``;

const PostItem = ({ title, body }) => {
  const [show, setShow] = useState(false);

  return (
    <Container data-test-id="post">
      <Main>
        <Title>{title}</Title>

        <div>
          <Button data-test-id="button" onClick={() => setShow(!show)}>
            Show/hide
          </Button>
        </div>

        <hr />
      </Main>
      {show && <Body data-test-id="body">{body}</Body>}
    </Container>
  );
};

export default PostItem;
