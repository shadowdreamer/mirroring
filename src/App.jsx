import './App.css'
import Provider from './provider'
import { DndProvider } from 'react-dnd'
import { isMobile } from 'react-device-detect';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { usePreview } from 'react-dnd-preview';

import RectRender from "./rectRender"
import Status from "./status";
const MyPreview = () => {
  const {display, itemType, item, style} = usePreview();
  if (!display) {
    return null;
  }
  return <div style={style}>{item.type}</div>;
};

function App() {
  return (
    <Provider>
      <DndProvider backend={ isMobile ? TouchBackend : HTML5Backend }>
        { isMobile && <MyPreview />}
        <RectRender></RectRender>
        <Status/>
      </DndProvider>
    </Provider>
  )
}

export default App
