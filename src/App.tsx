import './App.scss';
import './Init';
import { NextUIProvider } from '@nextui-org/react';
import CourseMap from './views/CourseMap';
import { SelectedCourseProvider } from 'providers/SelectedCourse';

function App(): JSX.Element {
  return (
    <SelectedCourseProvider>
      <NextUIProvider>
        <CourseMap />
      </NextUIProvider>
    </SelectedCourseProvider>
  );
}

export default App;
