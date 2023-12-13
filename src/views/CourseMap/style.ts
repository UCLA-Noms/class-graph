import { css } from '@emotion/css';

export const CourseMapClassName = css({
  width: '100vw',
  height: '100vh',
  maxHeight: 'fill-available',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
});

export const MainPanelClassName = css({
  minWidth: '50%',
  minHeight: '80%',
  backgroundColor: 'green',
});

export const DarsPanelClassName = css({ width: '20%', backgroundColor: 'red' });

export const InspectorPanelClassName = css({ width: '30%', backgroundColor: 'rgb(0 183 255)' });
