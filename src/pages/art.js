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
    burningMemories: file(relativePath: { eq: "burning-memories.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theHumanComputer: file(relativePath: { eq: "the-human-computer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    revisiting: file(relativePath: { eq: "revisiting.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newsPorridgeForBreakfast: file(relativePath: { eq: "news-porridge-for-breakfast.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    inDevelopment: file(relativePath: { eq: "in-development.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ArtPage = () => {
  const data = useStaticQuery(imageQuery);
  return (
    <Layout>
      <SEO title="Art" />
      <Container>
        <Cell
          title="???"
          description="indesign pair exercise"
          inDevelopment
          techStack="adobe indesign"
          background={data.inDevelopment}
        />
        <Cell
          title="revisiting"
          description="photoshop pair exercise"
          inDevelopment
          techStack="adobe photoshop"
          background={data.revisiting}
        />
        <Cell
          title="the human computer"
          description="illustrator pair exercise"
          inDevelopment
          techStack="adobe illustrator"
          background={data.theHumanComputer}
        />
        <Cell
          title="burning memories"
          description="illustrator final project"
          inDevelopment
          techStack="adobe illustrator"
          background={data.burningMemories}
        />
        <Cell
          title="news porrdige for breakfast"
          description="photoshop final project"
          inDevelopment
          techStack="adobe photoshop"
          background={data.newsPorridgeForBreakfast}
        />
        <Cell
          title="???"
          description="indesign final project"
          inDevelopment
          techStack="adobe indesign"
          background={data.inDevelopment}
        />
      </Container>
      <BackgroundCanvas />
    </Layout>
  );
};

export default ArtPage;
