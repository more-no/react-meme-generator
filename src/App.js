import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './styles.image.css';

export default function App() {
  const [userTopText, setUserTopText] = useState();
  const [userBottomText, setUserBottomText] = useState();
  const [userTemplate, setUserTemplate] = useState('older');

  const templates = 'https://api.memegen.link/images/' + `${userTemplate}.png`;

  const handleDownload = () => {
    saveAs(templates, `${userTemplate}.png`);
  };

  return (
    <div>
      <label>
        Top text{' '}
        <input
          value={userTopText}
          onChange={(top) => setUserTopText(top.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Bottom text{' '}
        <input
          value={userBottomText}
          onChange={(bottom) => setUserBottomText(bottom.target.value)}
        />
      </label>
      <br />
      <br />

      <label>
        Meme template{' '}
        <input
          value={userTemplate}
          onChange={(bottom) => setUserTemplate(bottom.target.value)}
        />
      </label>
      <br />
      <br />
      <article className="container">
        <img src={templates} alt={userTemplate} data-test-id="meme-image" />
        <div className="textTop">{userTopText}</div>
        <div className="textBottom">{userBottomText}</div>
      </article>
      <br />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}
