import React, { useState } from 'react';
import axios from 'axios';
// import Adopt from './Adopt2';

const Adopt = () => {
  const [breed, setBreed] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [pets, setPets] = useState([]);

  const handleSearch = async () => {
    try {
        const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6ImNhMmRiYTI3MWNkMjNjOTQyM2QxYmEzOTUxZDNiM2ZjZGI5Yjc0ZDNlOTgyYmZlNThmZWMzYWM4MDE5NzEwYTJkMjZjZTMxNTJmNDkyMTI1IiwiaWF0IjoxNjg5NzIzOTg2LCJuYmYiOjE2ODk3MjM5ODYsImV4cCI6MTY4OTcyNzU4Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.HxS0gK4RPyQmzcpJw-c89-ReU_c1NEXSJtljaPqNnqyO-H4B-cf-1m_VsjbjDQ-gvI9ltPP9u-KfYBSwI0-SOx-J9lajWXtbVD8K92cKXJ91YqL2ILQGbxmYkD6GLC6JNkT4fs2tY4fUXq8U-fsURrzHgjqSnZiPmOOywwtc3_JLI1zPnF5X3aqShTRhvw94kGlKRXgBe4ecK1viKltchXY6eIm8_6tMWVJBLYpZhqz7pOGr8C_Zp2oACm1_l07gpohGhDj2ZkF1BeH5AnBJA6XMi8a8FTAVO5V2TUwD8nzmiXA55HB_lfWxVEl_5iH2dadDjYIDE4w2ZsHkW3iWfQ';
      const response = await axios.get(
        `https://api.petfinder.com/v2/animals?type=dog&breed=${breed}&location=${zipcode}&distance=100`,
        {
          headers: {
            Authorization: `Bearer ${getOAuth}`,
          },
        }
      );

      setPets(response.data.animals);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Pet Search</h2>
      <input
        type="text"
        placeholder="Enter breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter zipcode"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {pets.map((pet) => (
          <div key={pet.id}>
            <img src={pet.photos.length > 0 ? pet.photos[0].medium : ''} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.description}</p>
            <a href={pet.url} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;
