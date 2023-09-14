import React, { useState, useEffect } from 'react';

const url = 'https://api.memegen.link/images';

export default function App() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Call the fetchData function inside useEffect
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>Image Data</h1>
      <ul>
        {imageData.map((item) => (
          <li key={item.id}>
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
