import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './styles.image.css';

export default function App() {
  const [userTopText, setUserTopText] = useState();
  const [userBottomText, setUserBottomText] = useState();
  const [userTemplate, setUserTemplate] = useState('doge');
  const initial = 'https://api.memegen.link/images/' + `${userTemplate}.png`;
  let templates = initial;

  if (userTopText != undefined || userBottomText != undefined) {
    templates =
      'https://api.memegen.link/images/' +
      `${userTemplate}/` +
      `${userTopText}/` +
      `${userBottomText}/` +
      '.png';
  } else {
    templates = initial;
  }

  const downloadImage = () => {
    saveAs(templates, `${userTemplate}.png`);
  };

  return (
    <div className="wrapper">
      <div className="sidebar">
        <br />
        <br />
        <label className="label1">
          Top text <br />
          <input
            value={userTopText}
            onChange={(top) => setUserTopText(top.target.value)}
          />
        </label>

        <br />
        <br />
        <label className="label2">
          Bottom text <br />
          <input
            value={userBottomText}
            onChange={(bottom) => setUserBottomText(bottom.target.value)}
          />
        </label>

        <br />
        <br />
        <label className="label3">
          Meme template <br />
          <input
            value={userTemplate}
            onChange={(bottom) => setUserTemplate(bottom.target.value)}
          />
        </label>

        <br />
        <br />
        <button className="button" onClick={downloadImage}>
          Download
        </button>
      </div>

      <div className="content">
        <br />
        <br />
        <img src={templates} alt={userTemplate} data-test-id="meme-image" />
        <br />
        <br />
      </div>
    </div>
  );
}
