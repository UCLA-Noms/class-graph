import { css } from '@emotion/react';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';

export const DarsPanel: React.FC = () => {
  return (
    <>
      <div css={style.topPanel}>
        <TopPanel />
      </div>
      <div css={style.line}></div>
      <div>
        <BottomPanel />
      </div>
    </>
  );
};

export default DarsPanel;

const style = {
  line: css({
    marginTop: '30px',
    width: '100%',
    height: '1px', // Adjust
    backgroundColor: '#9B9C99',
  }),
  topPanel: css({
    //borderWidth: '1px', // Example border width of 1 pixel
    //borderStyle: 'solid', // Example border style, you can change it to other styles as needed
  }),
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
  darsPanel: css({ width: '20%', backgroundColor: 'rgb(0 183 ' }),
  inspectorPanel: css({ width: '30%', backgroundColor: 'rgb(0 183 255)' }),
};
