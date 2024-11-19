import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAnimalsLS } from '../services/animalsService';
import { IAnimal } from '../models/IAnimal';
import { Button } from '../components/styled/Buttons';
import { H3 } from '../components/styled/H3';
import { Li } from '../components/styled/Li';
import { Img } from '../components/styled/Img';
import { AnimalContainer } from '../components/styled/AnimalContainer';


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
      <div>
        <ul>
          {animals.map(animal => (
            <AnimalContainer>
              <Li key={animal.id}>
              <H3>{animal.name}</H3>
              <Img src={animal.imageUrl} alt={animal.name} />
              <Button onClick={() => handleVisitClick(animal.id)}>Hälsa på</Button>
            </Li>
            </AnimalContainer>
          ))}
        </ul>
    </div>
    </>
  );
};

export default AnimalList;

