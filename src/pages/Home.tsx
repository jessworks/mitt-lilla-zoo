import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAnimalsLS } from '../services/animalsService';
import { IAnimal } from '../models/IAnimal';

export const AnimalList = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const animalsFromLS = getAnimalsLS();
    setAnimals(animalsFromLS);
  }, []);

  const handleVisitClick = (id:number) => {
    navigate(`/Animal/${id}`);
  };

  return (
    <>
      <h1>Mitt lilla zoo</h1>
      <div>
        <ul>
          {animals.map(animal => (
            <li key={animal.id}>
              <h3>{animal.name}</h3>
              <img src={animal.imageUrl} alt={animal.name} style={{ width: "200px", height: "auto" }} />
              <button onClick={() => handleVisitClick(animal.id)}>Hälsa på</button>
            </li>
          ))}
        </ul>
    </div>
    </>
  );
};

export default AnimalList;

