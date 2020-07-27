import React from "react";

import BackgroundImage from "gatsby-background-image";

import styled from "styled-components";

const OuterContainer = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  outline: 5px solid #f0f4ef;
  outline-offset: -20px;
  padding: 35px;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }
`;

const InnerContainer = styled.div`
  margin: auto;
  color: #f0f4ef;
  text-align: center;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #f0f4ef;
  border: 3px solid #f0f4ef;
  padding: 10px 15px;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #f0f4ef;
    color: #0d1821;
  }
`;

const TechStack = styled.p`
  font-family: "Exo";
  font-weight: bold;
`;

const Description = styled.p`
  line-height: 1.5;
`;

const PortfolioCellComponent = ({
  title,
  description,
  link,
  inDevelopment,
  background,
  techStack,
}) => {
  return (
    <OuterContainer
      fluid={[
        `linear-gradient(rgba(13, 24, 33, 0.75), rgba(13, 24, 33, 0.75))`,
        background.childImageSharp.fluid,
      ]}
    >
      <InnerContainer>
        <h2>{title}</h2>
        <TechStack>{techStack}</TechStack>
        <Description>{description}</Description>
        {inDevelopment ? (
          <Link>in development...</Link>
        ) : (
          <Link href={link} target="__blank">
            click to learn more
          </Link>
        )}
      </InnerContainer>
    </OuterContainer>
  );
};

export default PortfolioCellComponent;
