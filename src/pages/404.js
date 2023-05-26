import React from "react";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Container = styled.section`
  margin: auto;
  background-color: #f0f4ef;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
