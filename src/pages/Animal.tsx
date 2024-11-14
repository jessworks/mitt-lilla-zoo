import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAnimal } from "../models/IAnimal";
import { getAnimalLS } from '../services/animalsService';


export const Animal = () => {
    const { id } = useParams<{ id:string }>();
  const [animal, setAnimal] = useState<IAnimal | undefined>(undefined);
  
  useEffect(() => {
    if (id) {
        const animalFromLS = getAnimalLS(Number(id));
        setAnimal(animalFromLS);
    }
  }, [id]);

  const handleFeedClick = () => {
    console.log("feed click");
  };

  return (
        <>
            {animal ? (
            <>
                <h1>{animal.name}</h1>
                <img src={animal.imageUrl} alt={animal.name} style={{ width: "200px", height: "auto" }} />
                <button onClick={handleFeedClick}>Feed</button>
            </>
            ) : (
                <h1>Animal not found</h1>
            )}
        </>
    )
};