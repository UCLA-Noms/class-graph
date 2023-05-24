import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import './App.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App(): JSX.Element {
  const [parent, setParent] = useState(null);
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;
  const [isMoveable, setIsMoveable] = useState<boolean>(false);

  const onDrag = () => {
    setIsMoveable(true);
    //etc
  };
  const onStop = () => {
    setIsMoveable(false);
    //etc
  };

  return (
    <div className="app">
      <DndContext onDragEnd={handleDragEnd}>
        <div id="classes">Classes</div>
        <div id="main">
          <TransformWrapper
            initialScale={1}
            disabled={isMoveable}
            minScale={0.5}
            maxScale={1}
            limitToBounds={true}
            pinch={{ step: 5 }}
            wheel={{ step: 5 }}
            doubleClick={{ step: 5 }}
            // onPanningStop={() => setIsMoveable(false)}
            // onPanningStart={() => setIsMoveable(true)}
            // onPinchingStop={() => setIsMoveable(false)}
            // onPinchingStart={() => setIsMoveable(true)}
            // onZoomStart={() => setIsMoveable(true)}
            // onZoomStop={() => setIsMoveable(false)}
            // onPanning={() => setIsMoveable(true)}
            // onPinching={() => setIsMoveable(true)}
            // onZoom={() => setIsMoveable(true)}
          >
            <TransformComponent
              contentClass="main"
              wrapperStyle={{ height: '100vh', width: '50vw', margin: '0 auto' }}
            >
              <Droppable id="droppable">{!parent ? draggable : null}</Droppable>
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div id="dars">
          DARS
          <Droppable id="droppable">{parent === 'droppable' ? draggable : 'Drop here'}</Droppable>
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default App;
