import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import getOAuth from '../components/petFinderTokenRefresh';

const Breeds3 = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const getOAuth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6IjdmNjNkNDczMGYwZDIyNDQwZjlkZjQxNGUxZGUxZTJiYTBmOTNjYzk1OWY0YzA2MDgzM2VlNGVkMDljZTk5NjExOWVhNjNhNDk3YTc3YTM1IiwiaWF0IjoxNjg5NzMxNjIxLCJuYmYiOjE2ODk3MzE2MjEsImV4cCI6MTY4OTczNTIyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.J0yT88bnE86kkKcSGK1Ac6iNJ1aFunzGFMbiEA6o-_lHrobnuGNnksClmbtUNds-m67mJ0jpdiLUSF2iozJdw6HTemAjgaSO2zw7fgDU2dThFZZlvhVKSA5pPthB7MCgssBQcP8kpZum5YsM7ogBvQ9XgemFz6D0vGow-Zx2yXFUSLFeUx7w6DYQ9JqbhBSCI_ojdqPwVpgIllBt55dgXMyVaN6XMZXbf7n92BBPw_Whfu7agdMOIwJb_fxhatpzct57cQxYaF2872fDXzO8xRnx17N0P0vsw9AvFloUDF9ykIlW4J5qRjP6cWIV0DNh8LHM1jDyWlfcdfqXiauBkg';
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

export default Breeds3;
