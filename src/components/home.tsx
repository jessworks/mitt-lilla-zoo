import { useEffect, useState } from 'react';
import { getAnimals } from '../services/animalsService';
import { IAnimal } from '../models/IAnimal';

export const AnimalList = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    getAnimals().then(setAnimals).catch(console.error);
  }, []);

  return (
    <div>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>
            <h3>{animal.name}</h3>
            <img src={animal.imageUrl} alt={animal.name} style={{ width: '200px', height: 'auto' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;

