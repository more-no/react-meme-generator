import React, { useState, useEffect } from 'react';

export default function App() {
  //  const [imageData, setImageData] = useState([]);

  const [userTopText, setUserTopText] = useState();
  const [userBottomText, setUserBottomText] = useState();
  const [userTemplate, setUserTemplate] = useState(
    'https://api.memegen.link/images/older.png',
  );

  const userMeme = 'https://api.memegen.link/images/' + '${userTemplate}';

  // {
  //   {"id":"older","name":"An Older Code Sir, But It Checks Out","lines":2,"overlays":0,"styles":[],
  //   "blank":"https://api.memegen.link/images/older.png","example":{"text":["it's an older meme sir","but it checks out"],
  //   "url":"https://api.memegen.link/images/older/it's_an_older_meme_sir/but_it_checks_out.png"},
  //   "source":"http://knowyourmeme.com/memes/its-an-older-meme-but-it-checks-out","keywords":[],
  //   "_self":"https://api.memegen.link/templates/older"}
  // }

  // no need to fetch
  // ma the json file is what parse the request ??

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setImageData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

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

      <img src={`${userTemplate}`} alt="Alt text" data-test-id="meme-image" />

      {/* <ul>
        {imageData.map((item) => (
          <li key={item.id}>
            <p>TEMPLATE: {item.template}</p>
            <p>URL: {item.url}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
