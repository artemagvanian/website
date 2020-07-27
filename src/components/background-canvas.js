import React, { useRef, useEffect } from "react";

import { CanvasSpace, Create, Group } from "pts";

import styled from "styled-components";

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const BackgroundCanvas = () => {
  const canvas = useRef();

  useEffect(() => {
    var space = new CanvasSpace(canvas.current).setup({ bgcolor: "#f0f4ef" });
    var form = space.getForm();

    const params = {
      rotationSpeed: 0.0005,
      colors: ["#539987", "#384D6B", "#CC2936"],
      numPoints: 250,
      radius: 2,
    };

    var pts = new Group();

    space.add({
      start: () => {
        pts = Create.distributeRandom(space.innerBound, params.numPoints);
      },
      animate: () => {
        pts.rotate2D(params.rotationSpeed, space.center);
        pts.forEach((p, i) => {
          form
            .fillOnly(params.colors[i % params.colors.length])
            .point(p, params.radius);
        });
      },
    });

    space.play();
  }, []);

  return <Canvas ref={canvas} />;
};

export default BackgroundCanvas;
