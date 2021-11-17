import React from 'react';
import styled from 'styled-components';
import {TeacherPrompt} from './prompt';

export const DrawingPage: React.FC<any> = ({children}) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const CanvasWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return <Wrapper><TeacherPrompt/><CanvasWrapper>{children}</CanvasWrapper></Wrapper>;
};

