import React, { useState } from 'react';

export default function App() {
  const [userTopText, setUserTopText] = useState();
  const [userBottomText, setUserBottomText] = useState();
  const [userTemplate, setUserTemplate] = useState('older');

  const templates = 'https://api.memegen.link/images/' + `${userTemplate}.png`;

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
      <img src={templates} alt="Alt text" data-test-id="meme-image" />
    </div>
  );
}
