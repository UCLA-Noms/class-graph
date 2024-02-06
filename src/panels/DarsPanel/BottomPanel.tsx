import { css } from '@emotion/react';

export const BottomPanel: React.FC = () => {
  //Some API Call that returns the following info
  //College
  const college_name = 'COLLEGE OF TEMP';

  //Major
  const major_name = 'Psychology';
  const degree_name = 'B.A';

  //Graduation Requirements
  const grad_requirement = {
    'L&S Diversity': [],
    'Writing I': [],
    'Writing II': ['DROP TEMP'],
  };

  //Major Requirements
  const major_prep_completed = 0;
  const major_prep_total = 7;
  const major_req_completed = 0;
  const major_req_total = 28;

  //General Education
  const gen_ed = {
    'Art and Humanities': ['class A', 'class B', 'class C'],
    'Society and Culture': ['class D', 'class E'],
    'Scientific Inquiry': [],
  };

  return (
    <div css={style.container}>
      <div css={style.major_block}>
        <div>{college_name}</div>
        <div>{major_name + ' ' + degree_name}</div>
      </div>
    </div>
  );
};

export default BottomPanel;

const style = {
  container: css({
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: '4px',
    borderColor: 'black',
  }),
  major_block: css({
    marginTop: '20px',
    marginLeft: '30px',
    alignSelf: 'flex-start',
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
