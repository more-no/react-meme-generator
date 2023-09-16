import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './styles.image.css';

export default function App() {
  const [userTemplate, setUserTemplate] = useState('nice');
  const [userTopText, setUserTopText] = useState('');
  const [userBottomText, setUserBottomText] = useState('');
  const initial = `https://api.memegen.link/images/${userTemplate}.png`;
  let templates = initial;

  if (userTopText || userBottomText) {
    templates =
      'https://api.memegen.link/images/' +
      `${userTemplate}/` +
      `${userTopText}/` +
      userBottomText +
      '.png';
  }

  function downloadImage() {
    saveAs(templates, `${userTemplate}.png`);
  }

  return (
    <div className="frame">
      <div className="wrapper">
        <div className="input">
          <label className="label1">
            Top text <br />
            <input
              value={userTopText}
              onChange={(top) => setUserTopText(top.target.value)}
            />
          </label>
          <br />

          <label className="label2">
            Bottom text <br />
            <input
              value={userBottomText}
              onChange={(bottom) => setUserBottomText(bottom.target.value)}
            />
          </label>
          <br />

          <label className="label3">
            Meme template <br />
            <input
              value={userTemplate}
              onChange={(bottom) => setUserTemplate(bottom.target.value)}
            />
          </label>
          <br />

          <button className="button" onClick={downloadImage}>
            Download
          </button>
        </div>

        <div className="content">
          <img src={templates} alt={userTemplate} data-test-id="meme-image" />
        </div>
      </div>
    </div>
  );
}
