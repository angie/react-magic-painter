import React from 'react';

interface Props {
  init?: any;
  isReady?: boolean;
}

export const Intro: React.FC<Props> = ({init, isReady}) => (
  <header className={isReady ? 'hidden intro' : 'intro'}>
    <div className="intro__content">
      <h1>Drawing Check-Ins</h1>
      <button className="blob-btn" type="button" onClick={init}>
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
    </div>
  </header>
);
