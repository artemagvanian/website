import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

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

  & > div:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  & > div:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  & > div:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  & > div:nth-child(4) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }

  & > div:nth-child(5) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }

  & > div:nth-child(6) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);

    & > div:nth-child(5) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    & > div:nth-child(6) {
      grid-column: 3 / 4;
      grid-row: 3 / 4;
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);

    & > div:nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    & > div:nth-child(5) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }

    & > div:nth-child(6) {
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    & > div {
      grid-column: auto !important;
      grid-row: auto !important;
    }
  }
`;

const imageQuery = graphql`
  {
    burningMemories: file(relativePath: { eq: "burning-memories.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    theHumanComputer: file(relativePath: { eq: "the-human-computer.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    revisiting: file(relativePath: { eq: "revisiting.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    newsPorridgeForBreakfast: file(
      relativePath: { eq: "news-porridge-for-breakfast.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    inDevelopment: file(relativePath: { eq: "in-development.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    portImg: file(relativePath: { eq: "art/burning-memories/port-img.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    portVector: file(relativePath: { eq: "art/burning-memories/port.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    portProcess: file(
      relativePath: { eq: "art/burning-memories/port-process.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    portFinal: file(
      relativePath: { eq: "art/burning-memories/port-final.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    stealThisBook: file(relativePath: { eq: "steal-this-book.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    stealThisBookPage1: file(
      relativePath: { eq: "art/steal-this-book/steal-this-book-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    stealThisBookPage2: file(
      relativePath: { eq: "art/steal-this-book/steal-this-book-2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    stealThisBookPage3: file(
      relativePath: { eq: "art/steal-this-book/steal-this-book-3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const ArtPage = () => {
  const data = useStaticQuery(imageQuery);

  const TemplateParagraph = styled.p`
    line-height: 2;
    max-width: 750px;
    margin: 0 auto 50px;
  `;
  const TemplateLink = styled.a`
    color: #00bfff;
    text-decoration: none;
  `;

  const projectInfos = {
    burningMemories: (
      <TemplateParagraph>
        In this project I have decided to explore the medium of wood through the
        use of precision laser cutter. I was inspired by our classroom
        conversation about the internal mechanism of an inkjet printer, so I
        decided to simulate the process of dot-printing using the laser cutter,
        despite the only color available was black. For the engraving, I used an
        image of my native city of Mariupol, Ukraine, transformed into a series
        of small dots, later raster-engraved by the laser cutter. After some
        exploration, I produced a larger engraving, which also featured an
        interesting tactile and visual experiences.
      </TemplateParagraph>
    ),
    newsPorridgeForBreakfast: (
      <TemplateParagraph>
        I have started noticing that my daily newsletters were becoming more and
        more full of violent imagery since the spring of 2022. The reason is,
        obviously, increased coverage of Ukrainian conflict by the media I
        consume. At the same time, during my summer stay in Finland I have heard
        a{" "}
        <TemplateLink
          href="https://www.youtube.com/watch?v=I-TB4Ma8ihg"
          target="_blank"
        >
          song
        </TemplateLink>
        , which could be interpreted in many different ways, but to which I,
        interestingly enough, could relate (see the{" "}
        <TemplateLink
          href="https://lyricstranslate.com/en/-rafaels-angel.html"
          target="_blank"
        >
          lyrics
        </TemplateLink>{" "}
        yourself). I decided to depict my morning ritual of news consumption by
        representing it as something mundane like eating breakfast. While pixel
        art actively uses colors, the pictures in the bowl are, conversely, much
        more bland. Final result of this project was printed with two different
        overlay compositions on a large-format printer, which produced a very
        different color composition from what I expected.
      </TemplateParagraph>
    ),
    stealThisBook: (
      <TemplateParagraph>
        I was inspired by the poem of W.H. Auden, whose collection of short
        poems was very hard to get in the US. I have attempted to explore
        different image and text generation opportunities to complement the
        narrative of Auden, and, possibly, make it more visual and vivid. I have
        decided to complement each of the stanzas in the poem by a
        computer-generated picture, responding to the prompt that I derived from
        each stanza. I further added two computer-generated texts, which serve
        as epigraphs to the poem.
      </TemplateParagraph>
    ),
  };
  return (
    <Layout>
      <SEO title="Art" />
      <Container>
        <Cell
          title="???"
          description="indesign pair exercise"
          inDevelopment
          techStack="adobe indesign"
          background={getImage(data.inDevelopment)}
        />
        <Cell
          title="revisiting"
          description="photoshop pair exercise"
          inDevelopment
          techStack="adobe photoshop"
          background={getImage(data.revisiting)}
        />
        <Cell
          title="the human computer"
          description="illustrator pair exercise"
          inDevelopment
          techStack="adobe illustrator"
          background={getImage(data.theHumanComputer)}
        />
        <Cell
          title="burning memories"
          description="illustrator final project"
          techStack="adobe illustrator"
          background={getImage(data.burningMemories)}
          modalText={projectInfos.burningMemories}
          modalGallery={[
            getImage(data.portImg),
            getImage(data.portVector),
            getImage(data.portProcess),
            getImage(data.portFinal),
          ]}
        />
        <Cell
          title="news porrdige for breakfast"
          description="photoshop final project"
          modalText={projectInfos.newsPorridgeForBreakfast}
          modalGallery={[getImage(data.newsPorridgeForBreakfast)]}
          techStack="adobe photoshop"
          background={getImage(data.newsPorridgeForBreakfast)}
        />
        <Cell
          title="steal this book"
          description="indesign final project"
          modalText={projectInfos.stealThisBook}
          modalGallery={[
            getImage(data.stealThisBookPage1),
            getImage(data.stealThisBookPage2),
            getImage(data.stealThisBookPage3),
          ]}
          techStack="adobe indesign"
          background={getImage(data.stealThisBook)}
        />
      </Container>
      <BackgroundCanvas />
    </Layout>
  );
};

export default ArtPage;
