import React from 'react';
import {Canvas} from './canvas';
import {Goo} from './goo';
import {Toolbar} from './toolbar';

interface State {
  currentWidth?: number;
  currentColor?: string;
  isRegularMode?: boolean;
  isAutoWidth?: boolean;
  isEraser?: boolean;
}

interface ToolbarProps extends State {
  handleDownload?: () => void;
  dateUrl?: string;
  handleClear?: () => void;
  handleSpecialMode?: () => void;
  handleEraserMode?: () => void;
  setAutoWidth?: (e: any) => void;
  handleRegularMode?: () => void;
  handleColor?: (e: any) => void;
  handleWidth?: (e: any) => void;
  setCurrentSaturation?: (e: any) => void;
  setCurrentLightness?: (e: any) => void;
}

interface Props {
  toolbarProps: ToolbarProps;
  setImage?: () => void;
  state: State;
  init?: () => void;
  canvas: any;
}

export const PaintTool: React.FC<Props> = ({toolbarProps, setImage, state, init, canvas}) => (
  <>
    <Toolbar {...toolbarProps}/>
    <Canvas width={state.currentWidth} init={init} canvasRef={canvas} setImage={setImage}/>
    <Goo/>
  </>
);

