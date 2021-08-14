// import React from 'react';

// const Rank = () => {
// 	return (
// 		<div>
// 		  <div className='white f3'>
// 		  	{'Prathamesh, your current entry count is...'}
// 		  </div>
// 		  <div className='white f1'>
// 		  	{'0'}
// 		  </div>
// 		</div>
// 	);
// }

// export default Rank;
import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;