import { useState } from 'react';

// const url = 'https://api.memegen.link/images';

export default function App() {
  const [imageData, setImageData] = useState([]);

  const useEffect =
    (() => {
      fetch('https://api.memegen.link/images')
        .then((response) => response.json())
        .then((data) => {
          setImageData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
    []);

  return (
    <div>
      <h1>Image Data</h1>
      <ul>
        {imageData.map((index) => (
          <li key={index}>
            {/* Render the properties of each object in the array */}
            <p>TEMPLATE: {item.template}</p>
            <p>URL: {item.url}</p>
            {/* Add more properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
