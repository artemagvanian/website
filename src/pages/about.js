import React from "react";

import styled from "styled-components";

import { graphql, useStaticQuery } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

const Avatar = styled(GatsbyImage)`
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
  {
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 640, height: 640, layout: CONSTRAINED)
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
          <Avatar image={getImage(data.avatar)} />
          <h2>
            <Accent>Artem Agvanian</Accent>
          </h2>
          <Text>
            I am an undergraduate student and researcher at Brown University.
          </Text>
          <Text>
            I enjoy working with computer systems of all sorts, especially those
            that have interesting privacy and security features.
          </Text>
          <Text>
            For more up-to-date info, visit my LinkedIn or GitHub pages or send
            me an email.
          </Text>
        </section>
        <section>
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
      </Container>
      <BackgroundCanvas />
    </Layout>
  );
};

export default AboutPage;
