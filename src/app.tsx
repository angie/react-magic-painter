import {useCallback, useState} from 'react';
import {ReactLocation, Router} from 'react-location';
import {Intro} from './components/intro';
import {PaintTool} from './components/paint-tool';
import {DrawingPage} from './components/drawing-page';
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

  const reactLocation = new ReactLocation();

  return (
    <Router
      location={reactLocation}
      routes={[
        {
          path: '/',
          element: <Intro isReady={isReady}/>,
        },
        {
          path: 'draw',
          element: <DrawingPage><PaintTool toolbarProps={toolbarProps} state={state} canvas={canvas} init={init}/></DrawingPage>,
        },
      ]}
    />
  );
};

export default App;
