import CourseGraph from './components/CourseGraph';
import DarsPanel from 'panels/DarsPanel';
import CourseDetails from 'panels/Inspector/CourseDetails';

export const CourseMap: React.FC = () => {
  return (
    <div className="absolute flex h-screen w-full dark:dark">
      <DarsPanel />
      <CourseGraph />
      <div className="bg-green-600">
        <CourseDetails />
      </div>
    </div>
  );
};

export default CourseMap;
