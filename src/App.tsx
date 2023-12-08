import './App.scss';
import './Init';
import CourseMap from './views/CourseMap';

function App(): JSX.Element {
  return (
    <div className="app">
      <CourseMap />
    </div>
  );
}

export default App;
