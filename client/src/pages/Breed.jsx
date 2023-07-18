import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import getOAuth from '../components/petFinderTokenRefresh';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6Ijc5NTJmMjE0YzM1ZGViOTZlMjA5NmYwYTc2OWVjZjQ0ODU0YjU2MjVmYTE5MDA3ODZjNmNmYzNmNGZmODcxNjNjOTc3ZjA3ZDc3N2U0OTU3IiwiaWF0IjoxNjg5NjQ1NzE4LCJuYmYiOjE2ODk2NDU3MTgsImV4cCI6MTY4OTY0OTMxOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.OXe4YEo6sJvR7AWz4tMk1a5pxloABNikc4ItSctKuxZpTpxHkKAFHNTWzqIxs0Li23A6YKCLUsnhPMGjL37P6SamN4V_6XAcDUfSNGDD5pghfulNKbo0Lrb1UzT8iFzOiLTuJ6QWTX9XK1ko_Xr8f-5Hul2HKv9G4OKVkVFpqFYWeUU7pYiGJO08oaa4ITFirga_Nnq4eB7dcyOaKFeAYtrd4WKTYCRXbxqQHOd-ar8P_83pVwMrBZFZbFqC-F7j-LuirgqSKUdOO3ei4o2KwjmEV1nvYjgyZip8tzXXQHmRtqcdPJmEuz_LcX016KhXqQuwnWc7yfP0tx9Rfwqy9w';
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
