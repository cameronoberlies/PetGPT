import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import getOAuth from '../components/petFinderTokenRefresh';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6Ijg0ZTc0NmYxYjgyNDMxOGZiMWQwYjk1Zjk5OWRmNWFkNWUyNzM2NTE4NmQ2Y2ZjNDliMDgyMjI3NTNlYzY0MTEzMmM0ZTg3OTkyOTEwZDVmIiwiaWF0IjoxNjg5NjM3OTc0LCJuYmYiOjE2ODk2Mzc5NzQsImV4cCI6MTY4OTY0MTU3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.sX66fQMoVPgm6v8CIzP-ckaqfh5O5pHGurX8d09akpZVfdG7mDrmVHjxPSpGjXk-_yJXn1kqno9P2kL__eD3X69S0ILBeTQO89XuVK1eL12pcnxzNuQrudloFS2sjgExBybWduSV3hwy5gIubEa5dlllxaiVc4DNKCzTsYK8zTq5dKcxxjJD76zH91xHN1j2CL8XCa-tpvUK5Wj7jOtFEFFifQylzww0RvcEUPXyo-AfhLp5VojqhoJfdy1y0VceWfMhtpKlfl6PMrBF7Aj7C1UROPXWULK3ZMp4Gn6cLB7sBE7jrnp-ZMBaiBopwxlc8p6pZAe8kzFB4r0BVPepCg';
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
