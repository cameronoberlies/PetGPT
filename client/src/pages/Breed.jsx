import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const api_key = 'YOUR_API_KEY';
        const animalType = 'dog';
        const url = `https://api.petfinder.com/v2/types/dog/breeds`;

        const headers = {
          Authorization: `Bearer ${api_key}`,
        };

        const response = await axios.get(url, { headers });
        const data = response.data;

        if ('breeds' in data) {
          setBreeds(data.breeds);
        } else {
          console.error('Error:', data.detail);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div>
      <h1>List of Breeds</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed.id}>{breed.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Breeds;
