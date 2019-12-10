import React, { FC } from 'react';
import styled from 'styled-components';

import CameraImage from '../assets/cam.png';
import ModelImage from '../assets/model.png';

const StyledPreviewBar = styled.div`
  display: flex;
  justify-content: space-between;

  .PreviewBar__model {
    background: #141517;
    padding: 5px;

    img {
      height: 250px;
      width: auto;
    }
  }

  .PreviewBar__camera {
    background: #141517;
    padding: 5px;

    img {
      height: 250px;
      width: auto;
    }
  }
`;

interface Props {}

const PreviewBar: FC<Props> = ({}) => {
  return (
    <StyledPreviewBar>
      <div className="PreviewBar__model">
        <img src={ModelImage} alt="Model Preview" />
      </div>
      <div className="PreviewBar__camera">
        <img src={CameraImage} alt="Camera Preview" />
      </div>
    </StyledPreviewBar>
  );
};

export default PreviewBar;
