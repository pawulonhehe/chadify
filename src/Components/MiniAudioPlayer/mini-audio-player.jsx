import React from "react";
import styled from "styled-components";
import { mdiPlay, mdiSkipNext } from "@mdi/js";

import Icon from "@mdi/react";

const Container = styled.div`
  display: flex;
  background: #1b1b1b;
  width: 42%;
  height: 50px;
  color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fa5e5e;
`;

export const MiniAudioPlayer = () => {
  return (
    <Container>
      <Circle>
        <Icon path={mdiSkipNext} size={1.3} rotate={180} />
      </Circle>
      <Circle>
        <Icon path={mdiPlay} size={1.3} />
      </Circle>
      <Circle>
        <Icon path={mdiSkipNext} size={1.3} />
      </Circle>
    </Container>
  );
};
