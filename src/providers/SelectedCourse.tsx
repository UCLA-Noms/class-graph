import { createContext, useState } from 'react';
import { Props } from 'types/Props';

type SelectedCourseContextType = {
  selectedCourse?: number;
  setSelectedCourse: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const SelectedCourse = createContext<SelectedCourseContextType>({
  selectedCourse: undefined,
  setSelectedCourse: () => {},
});

export const SelectedCourseProvider: React.FC<Props> = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState<number | undefined>(undefined);

  return (
    <SelectedCourse.Provider value={{ selectedCourse, setSelectedCourse }}>
      {children}
    </SelectedCourse.Provider>
  );
};
