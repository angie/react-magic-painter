import React from 'react';

interface Props {
  init?: any;
  isReady?: boolean;
}

export const Intro: React.FC<Props> = ({init, isReady}) => (
  <header className={isReady ? 'hidden intro' : 'intro'}>
    <div className="intro__content">
      <h1>Magic Painter</h1>
      <button className="blob-btn" type="button" onClick={init}>
        <span className="blob-text">Start painting</span>
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"/>
            <span className="blob-btn__blob"/>
            <span className="blob-btn__blob"/>
            <span className="blob-btn__blob"/>
          </span>
        </span>
      </button>
      <p>
        Created by <strong>Adrian Bece</strong>
      </p>
      <p>
        <a
          href="https://codeadrian.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hashnode
        </a>{' '}
        |
        <a
          href="https://twitter.com/AdrianBeceDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        |
        <a
          href="https://www.buymeacoffee.com/ubnZ8GgDJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support my work
        </a>{' '}
        |
        <a
          href="https://codeadrian.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal website
        </a>
      </p>
    </div>
  </header>
);
