import './App.scss';
import './Init';
import CourseGraph from './pages/CourseGraph';

function App(): JSX.Element {
  return (
    <div className="app">
      <CourseGraph />
      {/* <div id="classes">Classes</div>
      <div id="main">
        <ClassGraph
          courses={courses}
          onCourseClick={handleCourseClick}
          selected={selectedCourse ? selectedCourse.id : -1}
        ></ClassGraph>
      </div>
      {selectedCourse ? (
        <div id="dars">
          <CourseDetails course={selectedCourse}></CourseDetails>
        </div>
      ) : null} */}
    </div>
  );
}

export default App;
