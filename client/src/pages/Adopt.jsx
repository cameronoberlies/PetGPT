import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getOAuth from "../utils/getOAuth";

const Adopt = () => {
  const [breed, setBreed] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [pets, setPets] = useState([]);
  const [token, setToken ] = useState("");
  // run the getOAuth function when the Adopt page loads?
  // For this, consider using the useEffect hook, maybe?
    useEffect(async () => {
        // just call our getOAuth function here
        const tkn = await getOAuth();
        // update your state variable that holds the token now
        setToken(tkn);
    },[])


  const handleSearch = async () => {
    // console log your state variable token
    //console.log('token is', token);
    try {
    //   const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6ImViNzM5MGFlNzUwM2M5NGQzMWZmMDg5MDNiOGY2YjExMzBhODRmZjczOWFmMWY4ZDkzOWJkMWMxMTc1Y2Y0OWYwOTg4MDQzYTg1NTYyNTU4IiwiaWF0IjoxNjg5NzM4MzIyLCJuYmYiOjE2ODk3MzgzMjIsImV4cCI6MTY4OTc0MTkyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.xeIaUbNykbQB-E5_T_TxpaZ3Lja3nOfOb3EEmc5GAvA15iTIX1rAd36e9a4KYjKmppYpdZB_8uXuMFvMKjAcZnF8BCJ59MYUXzkyFwm3RfEowcIiMzS12YPv8UWpFV4_3gjxop_n_1Gn-QXOn-X5XttRUBcqnD2-_7WIKuJQRs5ORL2cAis14b6NaUN_EFiBiRwMpj50mFqSZGPnyBFYg612YGigzImE3IzzlcujXV_3lmlBTbZNHFNXfetSdF4vuGhM9atLkOI8EZCcmMGzcj-RvnjMnyKGTlEO1DRV7SeoZuSW-m8SjHvYse7fFe7VzvlAfq7yeSucEpykE8Y2rA';
      const response = await axios.get(
        `https://api.petfinder.com/v2/animals?type=dog&breed=${breed}&location=${zipcode}&distance=100`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
      <h2>Search Breeds For Adoption</h2>
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
            <a href={pet.url} target="Petfinder" rel="Adoptable dog link to petfinder">
              Click here to goto petfinder for adoption details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;
