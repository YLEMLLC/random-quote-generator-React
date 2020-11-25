import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({ tweetQuote }) => {
  return (
    <div className='button-container'>
      <button
        onClick={tweetQuote}
        className='twitter-button'
        id='twitter'
        title='Tweet This'
      >
        <i className=' fab fa-twitter'></i>
      </button>
      <button onClick={() => window.location.reload()} id='new-quote'>
        hit me
      </button>
    </div>
  );
};
export default CustomButton;
