
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getOAuth from "../utils/getOAuth";
import { Box, Button, Stack, Input } from '@chakra-ui/react';
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
    //console.log('token is', token);
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
      <h2>Search Adoptable Dogs</h2>
      <p>No results means there are no dogs available in your area. Please try searching a different breed or change location </p>
      <p>Scroll down for results</p>
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
      <h3><center> Please take us home! </center></h3>

      <Box
          bg="#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          style={{
            backgroundImage:
              "url(https://as1.ftcdn.net/v2/jpg/00/75/04/04/1000_F_75040475_GT4SN0IArz77DrSgrC174lfBt2IPpjrv.jpg)",
            backgroundSize: "large",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          height="100%"
          width="100%"
          borderRadius="lg"
          p={120}
          display="flex"
          alignItems="left">
            </Box>

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

