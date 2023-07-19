import React, { useState } from 'react';
import axios from 'axios';
// import Adopt from './Adopt2';

const Adopt = () => {
  const [breed, setBreed] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [pets, setPets] = useState([]);

  const handleSearch = async () => {
    try {
      const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6IjdmNjNkNDczMGYwZDIyNDQwZjlkZjQxNGUxZGUxZTJiYTBmOTNjYzk1OWY0YzA2MDgzM2VlNGVkMDljZTk5NjExOWVhNjNhNDk3YTc3YTM1IiwiaWF0IjoxNjg5NzMxNjIxLCJuYmYiOjE2ODk3MzE2MjEsImV4cCI6MTY4OTczNTIyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.J0yT88bnE86kkKcSGK1Ac6iNJ1aFunzGFMbiEA6o-_lHrobnuGNnksClmbtUNds-m67mJ0jpdiLUSF2iozJdw6HTemAjgaSO2zw7fgDU2dThFZZlvhVKSA5pPthB7MCgssBQcP8kpZum5YsM7ogBvQ9XgemFz6D0vGow-Zx2yXFUSLFeUx7w6DYQ9JqbhBSCI_ojdqPwVpgIllBt55dgXMyVaN6XMZXbf7n92BBPw_Whfu7agdMOIwJb_fxhatpzct57cQxYaF2872fDXzO8xRnx17N0P0vsw9AvFloUDF9ykIlW4J5qRjP6cWIV0DNh8LHM1jDyWlfcdfqXiauBkg';
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
      <h2>Search Breeds</h2>
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
            <a href={pet.url} target="Adoptable dogs" rel="Adoptable dog link to petfinder">
              Click here to goto petfinder for adoption details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;
