import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 125px 1fr;
  background-color: hsl(215, 0%, 75%);
  margin: 15px 0;
`;
const Text = styled.p`
  margin: 0;
  background-color: #0d1821;
  color: #f0f4ef;
  padding: 5px;
`;
const Bar = styled.div`
  @keyframes load {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  animation: 1s ease-in-out 0s 1 load;
  transform-origin: left;
  width: ${(props) => props.percentage}%;
  text-align: right;
  background-color: #384d6b;
  color: #f0f4ef;
  padding: 5px;
`;

const ProgressBar = ({ title, percentage }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Bar percentage={percentage} />
    </Container>
  );
};

export default ProgressBar;
