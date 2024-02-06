import { css } from '@emotion/react';

export const DarsPanel: React.FC = () => {
  return (
    <div css={style.container}>
      <div css={style.row}>
        <div css={style.icon_major}></div>
        <div css={style.text}>MAJOR REQUIREMENTS</div>
      </div>
      <div css={style.row}>
        <div css={style.icon_minor}></div>
        <div css={style.text}>MINOR REQUIREMENTS</div>
      </div>
      <div css={style.row}>
        <div css={style.icon_line}></div>
        <div css={style.text}>ENFORCED CO-REQ/SERIES</div>
      </div>
      <div css={style.row}>
        <div css={style.icon_dotted}></div>
        <div css={style.text}>RECOMMENDED SERIES</div>
      </div>
    </div>
  );
};

export default DarsPanel;

const style = {
  container: css({
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }),
  row: css({
    display: 'flex',
    //justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
    // borderWidth: '2px',
    // borderStyle: 'solid', // Example bord
  }),
  icon_minor: css({
    width: '20px', // Adjust the width and height to desired size
    height: '20px',
    borderRadius: '50%', // Make it a circle by setting border radius to 50%
    backgroundColor: '#FFD600', // Example background color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px',
  }),
  icon_major: css({
    // Make the icon a circle
    width: '20px', // Adjust the width and height to desired size
    height: '20px',
    borderRadius: '50%', // Make it a circle by setting border radius to 50%
    backgroundColor: '#62BDFF', // Example background color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px',
    //color: 'white', // Example color for text/icon inside the circle
  }),
  icon_line: css({
    width: '20px',
    marginRight: '15px',
    height: '1px', // Adjust the thickness of the line if needed
    backgroundColor: 'black', // Adjust the color of the line if needed
  }),
  icon_dotted: css({
    width: '20px', // Adjust the width of the dotted line icon
    height: '1px', // Adjust the height of the dotted line icon
    border: '1px dotted black', // Create dotted line effect, // Adjust the spacing between dots
    marginRight: '15px',
  }),
  text: css({}),
};
