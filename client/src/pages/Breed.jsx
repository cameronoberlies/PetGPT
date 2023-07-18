import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import getOAuth from '../components/petFinderTokenRefresh';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6IjAwMmNkNTc0OGE2YjM4OGMzOGJmYTVjN2ExNmE0MTkwOGU4NTA1ZmMwYzI3YTdmMmFlOWNjNTAyNjEyYmQ1Mjc0NjM1ZjZkMjJlOWJlYzMzIiwiaWF0IjoxNjg5NjQwNzY3LCJuYmYiOjE2ODk2NDA3NjcsImV4cCI6MTY4OTY0NDM2Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.AYQBJYuF-wUdRx-7LpPZyR5wQZGPnCbE8DiR1QHBi_4p8CCIYmCOGp-wNIhtCP7KJTFeAA2dLjqIwoQRZQ2Qe_yR-sf2mciV6wkrHESZgg-wak3Kgioj5K33KQg2yuS3WaNRZ2yERXL_xAwQ0LPAYauyfYlzOQdqfaayqwyLZO6GUN200-lD_E4qUsFpFR2RshCPURJ3r1nD6Wv6XTv9x8AmwfQbIuTYP2isV-9_AvKe-7zRI4bJvox3ef47q5w2lS1SfP1yPwsDcNebKtPVLj5SB67uLvkcUA69ARUyYv7PCghq5fDAJq1jV7dwXkLkdvyP18Udho9dxChhRiJrsQ';
        const animalType = 'dog';
        const url = `https://api.petfinder.com/v2/types/dog/breeds`;

        const headers = {
          Authorization: `Bearer ${getOAuth}`,
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
