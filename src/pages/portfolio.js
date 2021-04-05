import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Cell from "../components/portfolio-cell";
import BackgroundCanvas from "../components/background-canvas";

const Container = styled.section`
  width: 100%;
  margin: 20px;
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: minmax(250px, 1fr);
  grid-template-columns: repeat(4, 1fr);

  & div:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  & div:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  & div:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  & div:nth-child(4) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }

  & div:nth-child(5) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }

  & div:nth-child(6) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);

    & div:nth-child(5) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    & div:nth-child(6) {
      grid-column: 3 / 4;
      grid-row: 3 / 4;
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);

    & div:nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    & div:nth-child(5) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }

    & div:nth-child(6) {
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    & div {
      grid-column: auto !important;
      grid-row: auto !important;
    }
  }
`;

const imageQuery = graphql`
  query {
    autoalliance: file(relativePath: { eq: "autoalliance.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avtoritet: file(relativePath: { eq: "avtoritet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    paintedSkies: file(relativePath: { eq: "painted-skies.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    breathum: file(relativePath: { eq: "breathum.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    positivemind: file(relativePath: { eq: "positivemind.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    baseElg: file(relativePath: { eq: "base-elg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const PortfolioPage = () => {
  const data = useStaticQuery(imageQuery);
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container>
        <Cell
          title="autoalliance"
          description="online-shop for a local business"
          link="https://autoalliance.com.ua"
          techStack="React + Sanity + Netlify"
          background={data.autoalliance}
        />
        <Cell
          title="avtoritet"
          description="landing page for a car dealer company"
          link="https://avtoritet.net.ua"
          techStack="React + Sanity + Netlify"
          background={data.avtoritet}
        />
        <Cell
          title="painted skies"
          description="innovative web-tool for processing notes"
          link="https://github.com/artemagvanian/painted-skies"
          techStack="Vue + Tesseract + Django"
          background={data.paintedSkies}
        />
        <Cell
          title="breathum"
          description="online dashboard for managing air quality sensors"
          link="https://github.com/artemagvanian/breathum"
          techStack="Django + Arduino"
          background={data.breathum}
        />
        <Cell
          title="positivemind"
          description="mobile application for spreading positivity"
          inDevelopment
          techStack="React Native + Expo"
          background={data.positivemind}
        />
        <Cell
          title="base elg"
          description="web-application for exploring historical data"
          link="https://baseelg.netlify.app"
          techStack="Vue.js + Sanity + Netlify"
          background={data.baseElg}
        />
      </Container>
      <BackgroundCanvas />
    </Layout>
  );
};

export default PortfolioPage;
