import {useCallback, useState} from 'react';
import {Canvas} from './components/canvas';
import {Goo} from './components/goo';
import {Intro} from './components/intro';
import {Toolbar} from './components/toolbar';
import {usePainter} from './hooks/use-painter';

const App = () => {
  const [dateUrl, setDataUrl] = useState('#');
  const [{canvas, isReady, ...state}, {init, ...api}] = usePainter();

  const handleDownload = useCallback(() => {
    if (!canvas || !canvas.current) {
      return;
    }

    setDataUrl(canvas.current.toDataURL('image/png'));
  }, [canvas]);

  const toolbarProps = {...state, ...api, dateUrl, handleDownload};

  return (
    <>
      <Intro isReady={isReady} init={init}/>
      <Toolbar {...toolbarProps}/>
      <Canvas width={state.currentWidth} canvasRef={canvas}/>
      <Goo/>
    </>
  );
};

export default App;
