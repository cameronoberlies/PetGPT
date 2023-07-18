import React, { useState } from 'react';
import axios from 'axios';

const Adopt = () => {
  const [breed, setBreed] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [pets, setPets] = useState([]);

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  
  const handleSearch = async () => {
    try {
        const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6IjdkNGMzNGJmOGY3ZGVlZDY3ZTVhNjk5MGNlNWZkYTFmYWFhOTVlMzBjZmY2MDcxMmQzNGVlNWViMGNhZDI0MWNiMDRjMmY1NWVlYTE1N2VkIiwiaWF0IjoxNjg5NzE4NTU2LCJuYmYiOjE2ODk3MTg1NTYsImV4cCI6MTY4OTcyMjE1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.SG6sr50nPnGZy0F5LSXxoKhDrjhyKvMXPd2vMt5-mvexOd8nKYn6MPO9-ZZD08w8jIIc7gxncYrPbB3Nn_vcnBJ8H0-N08poGTry4HuLC4CovQSUTzqRdDfAIc--TzfCHZsKnNimfL0AZ1EW9i81NmHntazvwbO1qCMQALSQvC6AYKeVgwLTvUy_Tdw1PXhQy9ACAHk2_BCUYVv6r9UwmW8yIGQPEI2JnJLmGAFPl5q_d0sXBhgLpsG1a9GqhryZugxAyo1jJ_LfKTnffKeJXO1qQR05KwkS4kWBwsuIYowGfxqqM_RF-3jCryGVLShoLSjz9OJ9jahRtcSZJqGPqw.OXe4YEo6sJvR7AWz4tMk1a5pxloABNikc4ItSctKuxZpTpxHkKAFHNTWzqIxs0Li23A6YKCLUsnhPMGjL37P6SamN4V_6XAcDUfSNGDD5pghfulNKbo0Lrb1UzT8iFzOiLTuJ6QWTX9XK1ko_Xr8f-5Hul2HKv9G4OKVkVFpqFYWeUU7pYiGJO08oaa4ITFirga_Nnq4eB7dcyOaKFeAYtrd4WKTYCRXbxqQHOd-ar8P_83pVwMrBZFZbFqC-F7j-LuirgqSKUdOO3ei4o2KwjmEV1nvYjgyZip8tzXXQHmRtqcdPJmEuz_LcX016KhXqQuwnWc7yfP0tx9Rfwqy9w';
        const response = await axios.get(
            `https://api.petfinder.com/v2/animals?type=dog&breed=${breed}&location=${zipcode}`,
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
      <h1>Petfinder Adoption</h1>
      <div>
        <label htmlFor="breed">Dog Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={handleBreedChange}
        />
      </div>
      <div>
        <label htmlFor="zipcode">Zipcode:</label>
        <input
          type="text"
          id="zipcode"
          value={zipcode}
          onChange={handleZipcodeChange}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      <h2>Available Pets</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Adopt;

