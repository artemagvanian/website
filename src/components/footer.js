import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: #0d1821;
`;

const Container = styled.div`
  max-width: 960px;
  display: flex;
  margin: 0 auto;
`;

const Text = styled.p`
  color: #f0f4ef;
  margin: 20px;
`;

const FooterComponent = () => (
  <Footer>
    <Container>
      <Text>&copy; {new Date().getFullYear()} Artem Agvanian</Text>
    </Container>
  </Footer>
);

export default FooterComponent;
