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
          element: <Intro/>,
        },
        {
          path: 'weekend',
          element: <DrawingPage prompt="Draw a picture to show the class what you did at the weekend"><PaintTool toolbarProps={toolbarProps} state={state} canvas={canvas} init={init}/></DrawingPage>,
        },
        {
          path: 'circle',
          element: <DrawingPage prompt="Circle the toucan in the image below"><PaintTool toolbarProps={toolbarProps} state={state} canvas={canvas} init={init}/></DrawingPage>,
        },
        {
          path: 'nouns',
          element: <DrawingPage prompt="Underline the nouns in the exerpt below"><PaintTool toolbarProps={toolbarProps} state={state} canvas={canvas} init={init}/></DrawingPage>,
        },
      ]}
    />
  );
};

export default App;
