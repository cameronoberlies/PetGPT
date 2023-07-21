import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getOAuth from "../utils/getOAuth";
import { Button, Stack, Input } from '@chakra-ui/react';

const Adopt = () => {
  const [breed, setBreed] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [pets, setPets] = useState([]);
  const [token, setToken ] = useState("");
  // run the getOAuth function when the Adopt page loads?
  // For this, consider using the useEffect hook, maybe?
    useEffect( () => {
        handleDogSearch();
        
      },[])
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
 
  //Input breed and zipcode for adoption
  return (
    <div>
      <h2>Search Breeds For Adoption</h2>
      {/* <input
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
      /> */}


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
