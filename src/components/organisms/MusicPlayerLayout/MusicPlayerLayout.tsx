import React from "react";
import styled from "styled-components";
import { MusicPlayer } from "../../../features/MusicPlayer/components/pages/MusicPlayer";
import { PlaylistView } from "../../../features/PlaylistView/components/pages/PlaylistView";

const MusicLayoutContainer = styled.div`
  display: flex;
  width: 1800px;
  height: 90vh;
  border: 1px solid black;
`;

const LeftSection = styled.div`
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

const RightSection = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const PlaylistViewWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex; /* Ensures the PlaylistView takes full space */
  flex-direction: column;
`;

const MusicPlayerWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 10px; /* Adds a small border space around the player */
  box-sizing: border-box; /* Ensures padding doesn't overflow the container */
`;

const MusicPlayerLayout: React.FC = () => {
    return (
        <MusicLayoutContainer>
            <LeftSection>
                <MusicPlayerWrapper>
                    <MusicPlayer />
                </MusicPlayerWrapper>
            </LeftSection>
            <RightSection>
                <PlaylistViewWrapper>
                    <PlaylistView />
                </PlaylistViewWrapper>
            </RightSection>
        </MusicLayoutContainer>
    );
};

export default MusicPlayerLayout;

