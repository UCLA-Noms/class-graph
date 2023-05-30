import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import './App.css';
import './Init';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ClassGraph from './components/ClassGraph';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App(): JSX.Element {
  const [parent, setParent] = useState(null);
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;
  const [isMoveable, setIsMoveable] = useState<boolean>(false);

  // const onDrag = () => {
  //   setIsMoveable(true);
  //   //etc
  // };
  // const onStop = () => {
  //   setIsMoveable(false);
  //   //etc
  // };

  return (
    <div className="app">
      <DndContext onDragEnd={handleDragEnd}>
        <div id="classes">Classes</div>
        <div id="main">
          <ClassGraph></ClassGraph>
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
