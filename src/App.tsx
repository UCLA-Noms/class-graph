import './App.scss';
import './Init';
import CourseMap from './views/CourseMap';
import { SelectedCourseProvider } from 'providers/SelectedCourse';

function App(): JSX.Element {
  return (
    <div className="app">
      <SelectedCourseProvider>
        <CourseMap />
      </SelectedCourseProvider>
    </div>
  );
}

export default App;
