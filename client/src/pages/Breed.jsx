import React, { useState } from "react";
import { Button, Input } from '@chakra-ui/react';
import Heart from 'react-heart';
import Chat from '../components/ai';
import '../test.css';
import { useFavorites } from "../components/FavoritesContext";
import { useLocation } from "react-router-dom";
//List of all dog breeds in Petfinder
export const dogBreeds = [
  "Akbash",
  "Akita",
  "Alaskan-Malamute",
  "American-Bulldog",
  "American-Bully",
  "American-Eskimo-Dog",
  "American-Foxhound",
  "American-Hairless-Terrier",
  "American-Staffordshire-Terrier",
  "American-Water-Spaniel",
  "Anatolian-Shepherd",
  "Appenzell-Mountain-Dog",
  "Aussiedoodle",
  "Australian-Cattle-Dog",
  "Australian-Kelpie",
  "Australian-Shepherd",
  "Australian-Terrier",
  "Basenji",
  "Basset-Hound",
  "Beagle",
  "Bearded-Collie",
  "Beauceron",
  "Bedlington-Terrier",
  "Belgian-Shepherd",
  "Bernese-Mountain-Dog",
  "Bichon-Frise",
  "Black-And-Tan-Coonhound",
  "Black-Russian-Terrier",
  "Bloodhound",
  "Bluetick-Coonhound",
  "Boerboel",
  "Bolognese",
  "Border-Collie",
  "Border-Terrier",
  "Borzoi",
  "Boston-Terrier",
  "Bouvier-Des-Flandres",
  "Boxer",
  "Boykin-Spaniel",
  "Briard",
  "Brittany-Spaniel",
  "Brussels-Griffon",
  "Bull-Terrier",
  "Bullmastiff",
  "Cairn-Terrier",
  "Canaan-Dog",
  "Cane-Corso",
  "Cardigan-Welsh-Corgi",
  "Carolina-Dog",
  "Catahoula-Leopard-Dog",
  "Cattle-Dog",
  "Caucasian-Sheepdog",
  "Cavachon",
  "Cavalier-King-Charles-Spaniel",
  "Cavapoo",
  "Chesapeake-Bay-Retriever",
  "Chihuahua",
  "Chinese-Crested-Dog",
  "Chinese-Foo-Dog",
  "Chinook",
  "Chiweenie",
  "Chocolate-Labrador-Retriever",
  "Chow-Chow",
  "Cirneco-Dell",
  "Clumber-Spaniel",
  "Cockapoo",
  "Cocker-Spaniel",
  "Collie",
  "Coonhound",
  "Corgi",
  "Coton-De-Tulear",
  "Curly-Coated-Retriever",
  "Dachshund",
  "Dalmatian",
  "Dandie-Dinmont-Terrier",
  "Doberman-Pinscher",
  "Dogo-Argentino",
  "Dogue-De-Bordeaux",
  "Dutch-Shepherd",
  "English-Bulldog",
  "English-Cocker-Spaniel",
  "English-Coonhound",
  "English-Foxhound",
  "English-Pointer",
  "English-Setter",
  "English-Shepherd",
  "English-Springer-Spaniel",
  "English-Toy-Spaniel",
  "Entlebucher",
  "Eskimo-Dog",
  "Feist",
  "Field-Spaniel",
  "Fila-Brasileiro",
  "Finnish-Lapphund",
  "Finnish-Spitz",
  "Flat-Coated-Retriever",
  "Fox-Terrier",
  "Foxhound",
  "French-Bulldog",
  "Galgo-Spanish-Greyhound",
  "German-Pinscher",
  "German-Shepherd-Dog",
  "German-Shorthaired-Pointer",
  "German-Spitz",
  "German-Wirehaired-Pointer",
  "Giant-Schnauzer",
  "Glen-Of-Imaal-Terrier",
  "Golden-Retriever",
  "Goldendoodle",
  "Gordon-Setter",
  "Great-Dane",
  "Great-Pyrenees",
  "Greater-Swiss-Mountain-Dog",
  "Greyhound",
  "Hamiltonstovare",
  "Harrier",
  "Havanese",
  "Hound",
  "Hovawart",
  "Husky",
  "Ibizan-Hound",
  "Icelandic-Sheepdog",
  "Illyrian-Sheepdog",
  "Irish-Setter",
  "Irish-Terrier",
  "Irish-Water-Spaniel",
  "Irish-Wolfhound",
  "Italian-Greyhound",
  "Jack-Russell-Terrier",
  "Japanese-Chin",
  "Jindo",
  "Kai-Dog",
  "Karelian-Bear-Dog",
  "Keeshond",
  "Kerry-Blue-Terrier",
  "Kishu",
  "Klee-Kai",
  "Komondor",
  "Kuvasz",
  "Kyi-Leo",
  "Labradoodle",
  "Labrador-Retriever",
  "Lakeland-Terrier",
  "Lancashire-Heeler",
  "Leonberger",
  "Lhasa-Apso",
  "Lowchen",
  "Lurcher",
  "Maltese",
  "Maltipoo",
  "Manchester-Terrier",
  "Maremma-Sheepdog",
  "Mastiff",
  "McNab",
  "Miniature-Bull-Terrier",
  "Miniature-Dachshund",
  "Miniature-Pinscher",
  "Miniature-Poodle",
  "Miniature-Schnauzer",
  "Mixed-Breed",
  "Morkie",
  "Mountain-Cur",
  "Mountain-Dog",
  "Munsterlander",
  "Neapolitan-Mastiff",
  "New-Guinea-Singing-Dog",
  "Newfoundland-Dog",
  "Norfolk-Terrier",
  "Norwegian-Buhund",
  "Norwegian-Elkhound",
  "Norwegian-Lundehund",
  "Norwich-Terrier",
  "Nova-Scotia-Duck-Tolling-Retriever",
  "Old-English-Sheepdog",
  "Otterhound",
  "Papillon",
  "Parson-Russell-Terrier",
  "Patterdale-Terrier",
  "Pekingese",
  "Pembroke-Welsh-Corgi",
  "Peruvian-Inca-Orchid",
  "Petit-Basset-Griffon-Vendeen",
  "Pharaoh-Hound",
  "Pit-Bull-Terrier",
  "Plott-Hound",
  "Pointer",
  "Polish-Lowland-Sheepdog",
  "Pomeranian",
  "Pomsky",
  "Poodle",
  "Portuguese-Podengo",
  "Portuguese-Water-Dog",
  "Presa-Canario",
  "Pug",
  "Puggle",
  "Puli",
  "Pumi",
  "Pyrenean-Shepherd",
  "Rat-Terrier",
  "Redbone-Coonhound",
  "Retriever",
  "Rhodesian-Ridgeback",
  "Rottweiler",
  "Rough-Collie",
  "Saint-Bernard",
  "Saluki",
  "Samoyed",
  "Sarplaninac",
  "Schipperke",
  "Schnauzer",
  "Schnoodle",
  "Scottish-Deerhound",
  "Scottish-Terrier",
  "Sealyham-Terrier",
  "Setter",
  "Shar-Pei",
  "Sheep-Dog",
  "Sheepadoodle",
  "Shepherd",
  "Shetland-Sheepdog",
  "Shiba-Inu",
  "Shih-Poo",
  "Shih-Tzu",
  "Shollie",
  "Siberian-Husky",
  "Silky-Terrier",
  "Skye-Terrier",
  "Sloughi",
  "Smooth-Collie",
  "Smooth-Fox-Terrier",
  "South-Russian-Ovtcharka",
  "Spaniel",
  "Spanish-Water-Dog",
  "Spinone-Italiano",
  "Spitz",
  "Staffordshire-Bull-Terrier",
  "Standard-Poodle",
  "Standard-Schnauzer",
  "Sussex-Spaniel",
  "Swedish-Vallhund",
  "Tennessee-Treeing-Brindle",
  "Terrier",
  "Thai-Ridgeback",
  "Tibetan-Mastiff",
  "Tibetan-Spaniel",
  "Tibetan-Terrier",
  "Tosa-Inu",
  "Toy-Fox-Terrier",
  "Toy-Manchester-Terrier",
  "Treeing-Walker-Coonhound",
  "Vizsla",
  "Weimaraner",
  "Welsh-Springer-Spaniel",
  "Welsh-Terrier",
  "West-Highland-White-Terrier",
  "Wheaten-Terrier",
  "Whippet",
  "White-German-Shepherd",
  "Wire-Fox-Terrier",
  "Wirehaired-Dachshund",
  "Wirehaired-Pointing-Griffon",
  "Wirehaired-Terrier",
  "Xoloitzcuintli",
  "Yellow-Labrador-Retriever",
  "Yorkshire-Terrier",
];

//Favorites displayed in profile
const Breeds = () => {

  const location = useLocation();
  const answers = location.state?.answers || {};
  
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [checkedBreeds, setCheckedBreeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); //Change here



  const handleCheckboxChange = (breed) => {
    if (checkedBreeds.includes(breed)) {
      setCheckedBreeds(checkedBreeds.filter((item) => item !== breed));
      removeFavorite(breed);
    } else {
      setCheckedBreeds([...checkedBreeds, breed]);
      addFavorite(breed);
    }
  };

  const filteredBreeds = dogBreeds.filter((breed) =>
  breed.toLowerCase().includes(searchQuery.toLowerCase())
);


  //Breeds search bar and list of all breeds in Petfinder
  return (
    <div className="breeds-container">
      <div className="dog-breed-list">
        <h2>Dog Breeds</h2>
        <p>Click for more information</p>

        <Input
          type="text"
          placeholder="Search for a breed..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />


        <ul className="dog-breed-ul">
          {filteredBreeds.map((breed) => {
            const formattedBreed =
              typeof breed === "string"
                ? breed.toLowerCase().replace(/ /g, "-")
                : breed;
            return (
              <li key={formattedBreed}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedBreeds.includes(breed)}
                    onChange={() => handleCheckboxChange(breed)}
                  />
                  <a
                  //Link to petfinder breed descriptions
                    href={`https://www.petfinder.com/dogs-and-puppies/breeds/${formattedBreed}`}
                    target="petfinder"
                    rel="link to petfinder"
                  >
                    {breed}
                  </a>
                </label>
              </li>
            );
          })}
        </ul>
        {console.log(favorites)}
      </div>
 
<div className="chat-container">
        <div className="final-results">
          <Chat {...answers} />
        </div>
      </div>
      
    </div>
    
      
  );
};

export default Breeds;
