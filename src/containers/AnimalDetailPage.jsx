import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAnimal } from '../data/animal.js';

function AnimalDetailPage() {
  const [animal, setAnimal] = useState({});

  let params = useParams();

  useEffect(
    () => {
      const chosenAnimal = getAnimal(params.animalId);
      setAnimal(chosenAnimal);
    },
    // Sekarang di sini jadi ada dependency listnya
    // Yaitu terhadap parameter yang berubah
    // Ambil dari mana?
    // hooks useParams (params) punya object animalId (:animalId)
    // ketika :animalId berubah, maka akan di-render ulang !
    [params.animalId]
  );

  return (
    <>
      <div>Nama Binatang: {animal?.name}</div>
      <img src={animal?.imageUrl} />
    </>
  );
}

export default AnimalDetailPage;
