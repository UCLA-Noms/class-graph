import { Course } from 'types/Course';

interface CourseDetailsProps {
  course: Course;
}
const CourseDetails = ({ course }: CourseDetailsProps) => {
  return (
    <div>
      <div>
        <h4>{course.code}</h4>
        <h2>{course.name}</h2>
      </div>

      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Units:</strong> {course.units}
      </p>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>insert more details about course</p>
    </div>
  );
};

export default CourseDetails;
