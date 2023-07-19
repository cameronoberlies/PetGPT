import React from 'react';

const Breeds = () => {
    const dogBreeds = [
        'akbash',
        'akita',
        'alaskan-malamute',
        'american-bulldog',
        'american-bully',
        'american-eskimo-dog',
        'american-foxhound',
        'american-hairless-terrier',
        'american-staffordshire-terrier',
        'american-water-spaniel',
        'anatolian-shepherd',
        'appenzell-mountain-dog',
        'aussiedoodle',
        'australian-cattle-dog',
        'australian-kelpie',
        'australian-shepherd',
        'australian-terrier',
        'basenji',
        'basset-hound',
        'beagle',
        'bearded-collie',
        'beauceron',
        'bedlington-terrier',
        'belgian-shepherd',
        'bernese-mountain-dog',
        'bichon-frise',
        'black-and-tan-coonhound',
        'black-russian-terrier',
        'bloodhound',
        'bluetick-coonhound',
        'boerboel',
        'bolognese',
        'border-collie',
        'border-terrier',
        'borzoi',
        'boston-terrier',
        'bouvier-des-flandres',
        'boxer',
        'boykin-spaniel',
        'briard',
        'brittany-spaniel',
        'brussels-griffon',
        'bull-terrier',
        'bullmastiff',
        'cairn-terrier',
        'canaan-dog',
        'cane-corso',
        'cardigan-welsh-corgi',
        'carolina-dog',
        'catahoula-leopard-dog',
        'cattle-dog',
        'caucasian-sheepdog',
        'cavachon',
        'cavalier-king-charles-spaniel',
        'cavapoo',
        'chesapeake-bay-retriever',
        'chihuahua',
        'chinese-crested-dog',
        'chinese-foo-dog',
        'chinook',
        'chiweenie',
        'chocolate-labrador-retriever',
        'chow-chow',
        'cirneco-dell',
        'clumber-spaniel',
        'cockapoo',
        'cocker-spaniel',
        'collie',
        'coonhound',
        'corgi',
        'coton-de-tulear',
        'curly-coated-retriever',
        'dachshund',
        'dalmatian',
        'dandie-dinmont-terrier',
        'doberman-pinscher',
        'dogo-argentino',
        'dogue-de-bordeaux',
        'dutch-shepherd',
        'english-bulldog',
        'english-cocker-spaniel',
        'english-coonhound',
        'english-foxhound',
        'english-pointer',
        'english-setter',
        'english-shepherd',
        'english-springer-spaniel',
        'english-toy-spaniel',
        'entlebucher',
        'eskimo-dog',
        'feist',
        'field-spaniel',
        'fila-brasileiro',
        'finnish-lapphund',
        'finnish-spitz',
        'flat-coated-retriever',
        'fox-terrier',
        'foxhound',
        'french-bulldog',
        'galgo-spanish-greyhound',
        'german-pinscher',
        'german-shepherd-dog',
        'german-shorthaired-pointer',
        'german-spitz',
        'german-wirehaired-pointer',
        'giant-schnauzer',
        'glen-of-imaal-terrier',
        'golden-retriever',
        'goldendoodle',
        'gordon-setter',
        'great-dane',
        'great-pyrenees',
        'greater-swiss-mountain-dog',
        'greyhound',
        'hamiltonstovare',
        'harrier',
        'havanese',
        'hound',
        'hovawart',
        'husky',
        'ibizan-hound',
        'icelandic-sheepdog',
        'illyrian-sheepdog',
        'irish-setter',
        'irish-terrier',
        'irish-water-spaniel',
        'irish-wolfhound',
        'italian-greyhound',
        'jack-russell-terrier',
        'japanese-chin',
        'jindo',
        'kai-dog',
        'karelian-bear-dog',
        'keeshond',
        'kerry-blue-terrier',
        'kishu',
        'klee-kai',
        'komondor',
        'kuvasz',
        'kyi-leo',
        'labradoodle',
        'labrador-retriever',
        'lakeland-terrier',
        'lancashire-heeler',
        'leonberger',
        'lhasa-apso',
        'lowchen',
        'lurcher',
        'maltese',
        'maltipoo',
        'manchester-terrier',
        'maremma-sheepdog',
        'mastiff',
        'mcnab',
        'miniature-bull-terrier',
        'miniature-dachshund',
        'miniature-pinscher',
        'miniature-poodle',
        'miniature-schnauzer',
        'mixed-breed',
        'morkie',
        'mountain-cur',
        'mountain-dog',
        'munsterlander',
        'neapolitan-mastiff',
        'new-guinea-singing-dog',
        'newfoundland-dog',
        'norfolk-terrier',
        'norwegian-buhund',
        'norwegian-elkhound',
        'norwegian-lundehund',
        'norwich-terrier',
        'nova-scotia-duck-tolling-retriever',
        'old-english-sheepdog',
        'otterhound',
        'papillon',
        'parson-russell-terrier',
        'patterdale-terrier',
        'pekingese',
        'pembroke-welsh-corgi',
        'peruvian-inca-orchid',
        'petit-basset-griffon-vendeen',
        'pharaoh-hound',
        'pit-bull-terrier',
        'plott-hound',
        'pointer',
        'polish-lowland-sheepdog',
        'pomeranian',
        'pomsky',
        'poodle',
        'portuguese-podengo',
        'portuguese-water-dog',
        'presa-canario',
        'pug',
        'puggle',
        'puli',
        'pumi',
        'pyrenean-shepherd',
        'rat-terrier',
        'redbone-coonhound',
        'retriever',
        'rhodesian-ridgeback',
        'rottweiler',
        'rough-collie',
        'saint-bernard',
        'saluki',
        'samoyed',
        'sarplaninac',
        'schipperke',
        'schnauzer',
        'schnoodle',
        'scottish-deerhound',
        'scottish-terrier',
        'sealyham-terrier',
        'setter',
        'shar-pei',
        'sheep-dog',
        'sheepadoodle',
        'shepherd',
        'shetland-sheepdog',
        'shiba-inu',
        'shih-poo',
        'shih-tzu',
        'shollie',
        'siberian-husky',
        'silky-terrier',
        'skye-terrier',
        'sloughi',
        'smooth-collie',
        'smooth-fox-terrier',
        'south-russian-ovtcharka',
        'spaniel',
        'spanish-water-dog',
        'spinone-italiano',
        'spitz',
        'staffordshire-bull-terrier',
        'standard-poodle',
        'standard-schnauzer',
        'sussex-spaniel',
        'swedish-vallhund',
        'tennessee-treeing-brindle',
        'terrier',
        'thai-ridgeback',
        'tibetan-mastiff',
        'tibetan-spaniel',
        'tibetan-terrier',
        'tosa-inu',
        'toy-fox-terrier',
        'toy-manchester-terrier',
        'treeing-walker-coonhound',
        'vizsla',
        'weimaraner',
        'welsh-springer-spaniel',
        'welsh-terrier',
        'west-highland-white-terrier',
        'wheaten-terrier',
        'whippet',
        'white-german-shepherd',
        'wire-fox-terrier',
        'wirehaired-dachshund',
        'wirehaired-pointing-griffon',
        'wirehaired-terrier',
        'xoloitzcuintli',
        'yellow-labrador-retriever',
        'yorkshire-terrier'
    ];

    return (
        <div>
            <h2>Dog Breeds List</h2>
            <p>Click for description</p>
            <ul>
                {dogBreeds.map((breed, index) => (
                    <li key={index}>
                        <a href={`https://www.petfinder.com/dogs-and-puppies/breeds/${breed}`} target="petfinder" rel="link to petfinder">
                            {breed}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breeds;
