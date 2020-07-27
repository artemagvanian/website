import React from "react";

import styled from "styled-components";

import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProgressBar from "../components/progress-bar";
import BackgroundCanvas from "../components/background-canvas";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

const Container = styled.section`
  width: 960px;
  margin: 10px;
  background-color: #f0f4ef;
  text-align: center;
  border: 10px solid #384d6b;
  padding: 35px 50px;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 35px;
    grid-gap: 0;
  }

  @media (max-width: 576px) {
    padding: 35px 10px;
  }
`;

const Avatar = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 0 auto;
`;

const Text = styled.p`
  line-height: 1.5;
  max-width: 500px;
  margin: 15px auto;
`;

const Accent = styled.span`
  color: #cc2936;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  width: 50px;
  height: 50px;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #384d6b;
`;

const avatarQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const AboutPage = () => {
  const data = useStaticQuery(avatarQuery);

  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <section>
          <Avatar fluid={data.avatar.childImageSharp.fluid} />
          <h2>
            <Accent>Artem Agvanian</Accent>
          </h2>
          <Text>I am a front-end developer, now based in Norway.</Text>
          <Text>
            I enjoy creating software that cares about users in the first place.
            I am fond of progressive technologies that allow users to solve
            their mundane problems in the most intuitive way possible.
          </Text>
        </section>
        <div>
          <section>
            <h2>my skills</h2>
            <ProgressBar title="HTML5" percentage={80} />
            <ProgressBar title="CSS3" percentage={80} />
            <ProgressBar title="JavaScript" percentage={70} />
            <ProgressBar title="React" percentage={70} />
            <ProgressBar title="D3" percentage={50} />
            <ProgressBar title="React Native" percentage={40} />
          </section>
          <section
            css={`
              margin-top: 30px;
            `}
          >
            <h2>contact me</h2>
            <Contacts>
              <IconContext.Provider value={{ color: "white", size: 32 }}>
                <Link
                  href="https://www.linkedin.com/in/artemagvanian/"
                  target="__blank"
                >
                  <FaLinkedin />
                </Link>
                <Link href="https://github.com/artemagvanian" target="__blank">
                  <FaGithub />
                </Link>
                <Link href="mailto:artemagvanian@icloud.com" target="__blank">
                  <FaEnvelope />
                </Link>
              </IconContext.Provider>
            </Contacts>
          </section>
        </div>
      </Container>
      <BackgroundCanvas />
    </Layout>
  );
};

export default AboutPage;
