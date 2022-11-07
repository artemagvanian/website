import React, { useState } from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import styled from "styled-components";

const OuterContainer = styled(BgImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  outline: 5px solid #f0f4ef;
  outline-offset: -20px;
  padding: 35px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  height: 100%;

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
  display: inline-block;
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
    cursor: pointer;
  }
`;

const TechStack = styled.p`
  font-family: "Exo";
  font-weight: bold;
`;

const Description = styled.p`
  line-height: 1.5;
`;

const MakeImageGrid = (n) => styled.div`
  width: 100%;
  margin: 50px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(${Math.min(Math.max(1, n), 4)}, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(${Math.min(Math.max(1, n - 1), 3)}, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(${Math.min(Math.max(1, n - 1), 2)}, 1fr);
  }
`;

const OuterModalContainer = styled.aside`
  position: fixed;
  width: 100vw;
  height: 100%;
  overflow: scroll;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.85);
  z-index: 100;
`;

const InnerModalContainer = styled.div`
  margin: auto;
  width: 80%;
  height: 80%;
  color: #f0f4ef;
  text-align: center;
`;

const Modal = ({ visible, setVisible, modalText, modalGallery }) => {
  const ImageGrid = MakeImageGrid(modalGallery.length);

  if (visible) {
    return (
      <OuterModalContainer>
        <InnerModalContainer>
          <Link onClick={() => setVisible(false)}>back to all objects</Link>
          <ImageGrid>
            {modalGallery.map((img) => (
              <GatsbyImage image={img} width={100}></GatsbyImage>
            ))}
          </ImageGrid>
          {modalText}
        </InnerModalContainer>
      </OuterModalContainer>
    );
  }
};

const PortfolioCellComponent = ({
  title,
  description,
  link,
  inDevelopment,
  background,
  techStack,
  modalText,
  modalGallery,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {(modalText || modalGallery) && (
        <Modal
          visible={visible}
          setVisible={setVisible}
          modalText={modalText}
          modalGallery={modalGallery}
        ></Modal>
      )}
      <OuterContainer
        image={[
          `linear-gradient(rgba(13, 24, 33, 0.75), rgba(13, 24, 33, 0.75))`,
          background,
        ]}
      >
        <InnerContainer>
          <h2>{title}</h2>
          <TechStack>{techStack}</TechStack>
          <Description>{description}</Description>
          {inDevelopment ? (
            <Link>in development...</Link>
          ) : link ? (
            <Link href={link} target="_blank">
              click to learn more
            </Link>
          ) : (
            <Link onClick={() => setVisible(true)}>click to learn more</Link>
          )}
        </InnerContainer>
      </OuterContainer>
    </div>
  );
};

export default PortfolioCellComponent;
