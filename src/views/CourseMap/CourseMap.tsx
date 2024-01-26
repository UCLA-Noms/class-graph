import { css } from '@emotion/react';

import CourseGraph from './components/CourseGraph';
import DarsPanel from 'panels/DarsPanel';
import CourseDetails from 'panels/Inspector/CourseDetails';

export const CourseMap: React.FC = () => {
  return (
    <div css={style.courseMap}>
      <div css={style.darsPanel}>
        <DarsPanel />
      </div>
      <div css={style.mainPanel}>
        <CourseGraph></CourseGraph>
      </div>
      <div css={style.inspectorPanel}>
        <CourseDetails></CourseDetails>
      </div>
    </div>
  );
};

export default CourseMap;

const style = {
  courseMap: css({
    width: '100vw',
    height: '100vh',
    maxHeight: 'fill-available',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  }),
  mainPanel: css({
    minWidth: '50%',
    minHeight: '80%',
    backgroundColor: 'green',
  }),
  darsPanel: css({ width: '20%', backgroundColor: 'red' }),
  inspectorPanel: css({ width: '30%', backgroundColor: 'rgb(0 183 255)' }),
};
