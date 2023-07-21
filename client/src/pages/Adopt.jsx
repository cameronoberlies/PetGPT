
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getOAuth from "../utils/getOAuth";
import { Button, Stack, Input } from '@chakra-ui/react';
import { dogBreeds } from './Breed';

const Adopt = () => {
  const [breed, setBreed] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [pets, setPets] = useState([]);
  const [token, setToken ] = useState("");
  // run the getOAuth function when the Adopt page loads?
  // For this, consider using the useEffect hook, maybe?
  useEffect(() => {
    handleDogSearch();
  }, []);

  const handleDogSearch = async () => {
    // console log your state variable token
<<<<<<< Updated upstream
    //console.log('token is', token);
=======
    // console.log('token is', token);
>>>>>>> Stashed changes
    try {
      // const tkn = await getOAuth();
      setToken(await getOAuth());
      const response = await axios.get(
        `https://api.petfinder.com/v2/animals?type=dog&breed=${breed}&location=${zipcode}&distance=100`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ); 
      await setPets(response.data.animals);
    } catch (error) {
      console.error(error);
    }
  };

  // Filter dog breeds based on user input
  const filteredBreeds = breed ? dogBreeds.filter(b => b.toLowerCase().includes(breed.toLowerCase())) : [];

  // Input breed and zipcode for adoption
  return (
    <div>
      <h2>Search Breeds For Adoption</h2>

      <Stack spacing={3}>
        <Input
          focusBorderColor='pink.400'
          type="text"
          placeholder="Enter breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <Input
          isInvalid
          errorBorderColor='red.300'
          type="text"
          placeholder="Enter zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <Button onClick={handleDogSearch} colorScheme='blue' margin={5}>Search</Button>
      </Stack>

      {/* Display breed suggestions */}
      {filteredBreeds.length > 0 && (
        <ul>
          {filteredBreeds.map((b) => (
            <li key={b}>
              <button onClick={() => setBreed(b)}>{b}</button>
            </li>
          ))}
        </ul>
      )}

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

