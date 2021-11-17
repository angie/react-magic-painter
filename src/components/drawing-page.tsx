import React from 'react';
import styled from 'styled-components';

interface Props {
  prompt: string;
}

export const DrawingPage: React.FC<Props> = ({prompt, children}) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const CanvasWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return <Wrapper><h2>{prompt}</h2><CanvasWrapper>{children}</CanvasWrapper></Wrapper>;
};

