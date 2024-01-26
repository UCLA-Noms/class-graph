import { createContext } from 'react';

type SelectedCourseContextType = {
  selectedCourse?: number;
  setSelectedCourse: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const SelectedCourse = createContext<SelectedCourseContextType>({
  selectedCourse: undefined,
  setSelectedCourse: () => {},
});
