import React from 'react';
import './quote-text.styles.css';

import SpinnerLoader from '../spinner-loader/spinner-loader.component';
import CustomButton from '../custum-button/custom-button.component';

const QuoteText = ({ quoteText, quoteAuthor, handleChange, loading }) => {
  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;
    window.open(twitterUrl, '_blank');
  };
  if (loading) {
    return <SpinnerLoader />;
  } else {
    return (
      <div className='quote-container' id='quote-container'>
        <div className='quote-text'>
          <i className='fas fa-quote-left'></i>
          <span className='quote-text'>{quoteText}</span>
          <div className='quote-author'>
            <span className='' id='author'>
              {`${!quoteAuthor ? 'Uknown' : quoteAuthor}`}
            </span>
          </div>
          <CustomButton handleChange={handleChange} tweetQuote={tweetQuote} />
        </div>
      </div>
    );
  }
};

export default QuoteText;
