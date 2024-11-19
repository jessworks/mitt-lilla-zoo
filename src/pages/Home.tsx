import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAnimalsLS } from '../services/animalsService';
import { IAnimal } from '../models/IAnimal';
import { Button } from '../components/styled/Buttons';
import { H1 } from '../components/styled/H1';
import { H3 } from '../components/styled/H3';
import { Li } from '../components/styled/Li';


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
      <H1>Mitt lilla zoo</H1>
      <div>
        <ul>
          {animals.map(animal => (
            <Li key={animal.id}>
              <H3>{animal.name}</H3>
              <img src={animal.imageUrl} alt={animal.name} style={{ width: "200px", height: "auto" }} />
              <Button onClick={() => handleVisitClick(animal.id)}>Hälsa på</Button>
            </Li>
          ))}
        </ul>
    </div>
    </>
  );
};

export default AnimalList;

