import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundCanvas from "../components/background-canvas";

import styled from "styled-components";

// my coolor palette: https://coolors.co/0d1821-384d6b-539987-f0f4ef-cc2936
// my breakpoints: 576px, 768px, 992px, 1200px
// my fonts: Libre Franklin, Exo, Josefin Sans

const Section = styled.section`
  width: 768px;
  border: 10px solid #384d6b;
  margin: auto;
  padding: 70px;
  background-color: #f0f4ef;

  @media (max-width: 768px) {
    padding: 70px 15px;
    width: 100%;
    margin: auto 10px;
  }
`;

const Heading = styled.h1`
  color: #0d1821;
  text-align: center;
  line-height: 1.5;
`;

const Accent = styled.span`
  color: #cc2936;
`;

const SiteLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #0d1821;
  border: 3px solid #384d6b;
  padding: 10px 15px;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #384d6b;
    color: #f0f4ef;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <Heading>
        Hi! I am <Accent>Artem</Accent>
        <br />I am a front-end web developer
      </Heading>
      <Container>
        <SiteLink to="/about">about me</SiteLink>
        <SiteLink to="/portfolio">my work</SiteLink>
      </Container>
    </Section>
    <BackgroundCanvas />
  </Layout>
);

export default IndexPage;
