import React from "react";

const Card = ({ quote }) => {
  return (
    <div className="card px-5 py-8 max-w-[650px]">
      <p className="text-2xl font-mono font-bold">{quote.quote}</p>
      <div className="pt-4">
        {" "}
        <span>by {quote.character}</span> |{" "}
        <a
          href={`https://twitter.com/intent/tweet?text="${quote.quote} by ${quote.character} &hashtags=animeQuote`}
          target="_blank"
          rel="noreferrer"
        >
          Tweet
        </a>{" "}
      </div>
    </div>
  );
};

export default Card;
