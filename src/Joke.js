import React from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({ id, vote, votes, text }) => {

  const handleVote = (id, val) => {
    vote(id, val);
  }

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={() => handleVote(id, +1)}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={() => handleVote(id, -1)}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

export default Joke;
