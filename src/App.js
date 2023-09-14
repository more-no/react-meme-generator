import React, { useState, useEffect } from 'react';

export default function App() {
  const [userTopText, setUserTopText] = useState();
  const [userBottomText, setUserBottomText] = useState();
  const [userMeme, setUserMeme] = useState();
  const [userTemplate, setUserTemplate] = useState(
    'https://api.memegen.link/images/older.png',
  );

  const templates = 'https://api.memegen.link/images/' + `${userTemplate}.png`;

  // {
  //   {"id":"older",
  //   "name":"An Older Code Sir, But It Checks Out",
  //   "lines":2,
  //   "overlays":0,
  //   "styles":[],
  //   "blank":"https://api.memegen.link/images/older.png",
  //   "example":{"text":["it's an older meme sir","but it checks out"],
  //   "url":"https://api.memegen.link/images/older/it's_an_older_meme_sir/but_it_checks_out.png"},
  //   "source":"http://knowyourmeme.com/memes/its-an-older-meme-but-it-checks-out","keywords":[],
  //   "_self":"https://api.memegen.link/templates/older"}
  // }

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
          value={userMeme}
          onChange={(bottom) => setUserTemplate(bottom.target.value)}
        />
      </label>
      <br />
      <br />

      <img src={`${templates}`} alt="Alt text" data-test-id="meme-image" />
    </div>
  );
}
