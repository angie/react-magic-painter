import React from 'react';
import {Link} from 'react-location';

interface Props {
  isReady?: boolean;
}

const Button: React.FC<{question: string; path: string}> = ({question, path}) => (
  <Link to={path}>
    <button className="blob-btn" type="button">
      <span className="blob-text">{question}</span>
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"/>
          <span className="blob-btn__blob"/>
          <span className="blob-btn__blob"/>
          <span className="blob-btn__blob"/>
        </span>
      </span>
    </button>
  </Link>
);

export const Intro: React.FC<Props> = () => (
  <header className="intro">
    <div className="intro__content">
      <h1>Drawing Check-Ins</h1>
      <Button question="How was your weekend?" path="weekend"/>
      <Button question="Circle the correct answer" path="circle"/>
      <Button question="Underline nouns" path="nouns"/>
    </div>
  </header>
);
