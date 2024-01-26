import { useState } from 'react';
import './App.scss';
import './Init';
import CourseMap from './views/CourseMap';
import { SelectedCourse } from 'providers/SelectedCourse';

function App(): JSX.Element {
  const [selectedCourse, setSelectedCourse] = useState<number | undefined>(undefined);

  return (
    <div className="app">
      <SelectedCourse.Provider value={{ selectedCourse, setSelectedCourse }}>
        <CourseMap />
      </SelectedCourse.Provider>
    </div>
  );
}

export default App;
