import styled from "styled-components";
import art from "../../Assets/art.jpg";
import Icon from "@mdi/react";
import { mdiPlay, mdiSkipNext } from "@mdi/js";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 320px;
  height: 320px;
`;

const PlayerContainer = styled.div`
  display: flex;
  background: #292929;
  width: 250px;
  height: 150px;
  border-radius: 20px;
  gap: 15px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Circle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fa5e5e;
`;

const BiggyCircle = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: #fa5e5e;
`;

const Track = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const TrackName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const TrackArtist = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background: #000000;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

export const AudioPlayer = () => {
  return (
    <>
      <TopBar>Jakis feature powinien tu byc</TopBar>
      <Container>
        <ImageWrapper>
          <img src={art} alt="album art" width={320} />
        </ImageWrapper>
        <PlayerContainer>
          <Track>
            <TrackName>Falling</TrackName>
            <TrackArtist>Alesso</TrackArtist>
          </Track>
          <Controller>
            <Circle>
              <Icon path={mdiSkipNext} size={2.3} rotate={180} />
            </Circle>
            <BiggyCircle>
              <Icon path={mdiPlay} size={3.5} />
            </BiggyCircle>
            <Circle>
              <Icon path={mdiSkipNext} size={2.3} />
            </Circle>
          </Controller>
        </PlayerContainer>
      </Container>
    </>
  );
};
