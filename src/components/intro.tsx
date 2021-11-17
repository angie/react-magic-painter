import React from 'react';
import {Link} from 'react-location';

interface Props {
  isReady?: boolean;
}

export const Intro: React.FC<Props> = ({isReady}) => (
  <header className={isReady ? 'hidden intro' : 'intro'}>
    <div className="intro__content">
      <h1>Drawing Check-Ins</h1>
      <Link to="draw">
        <button className="blob-btn" type="button">
          <span className="blob-text">Start drawing</span>
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
    </div>
  </header>
);
