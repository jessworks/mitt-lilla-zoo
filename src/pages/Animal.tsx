import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IAnimal } from "../models/IAnimal";
import { getAnimalLS } from '../services/animalsService';
import { Button } from '../components/styled/Buttons';
import { P } from '../components/styled/P';
import { H3 } from '../components/styled/H3';
import { H1 } from '../components/styled/H1';
import { H2 } from '../components/styled/H2';


export const Animal = () => {
    const { id } = useParams<{ id:string }>();
    const [animal, setAnimal] = useState<IAnimal | undefined>(undefined);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (id) {
            const animalFromLS = getAnimalLS(Number(id));
            setAnimal(animalFromLS);
        }
    }, [id]);

    const handleFeedClick = () => {

        if (animal) {
            const updatedAnimal = {
                ...animal,
                isFed: true,
                lastFed: Date.now(),
            };
            setAnimal(updatedAnimal);
            //ls
            setBtnDisabled(true);
        }
    };

    const handleBackToZooClick = () => {
        navigate(`/`);
    }

    return (
        <>
            {animal ? (
            <>
                <H2>{animal.name}</H2>
                <P>{animal.yearOfBirth}</P>
                <img src={animal.imageUrl} alt={animal.name} style={{ width: "200px", height: "auto" }} />
                <P>{animal.shortDescription}</P>
                <Button onClick={handleFeedClick} disabled={btnDisabled}>Mata {animal.name}</Button>
                <Button onClick={handleBackToZooClick}>Tillbaka till zoo</Button>
                {animal.isFed && <P>{animal.name} matades {new Date(animal.lastFed).toLocaleString([], { hour: '2-digit', minute: '2-digit' })}.</P>}
                <H3>Lär dig mer</H3>
                <P>{animal.name}s latinska namn är {animal.latinName}</P>
                <P>{animal.longDescription}</P>
            </>
            ) : (
                <H2>Animal not found</H2>
            )}
        </>
    )
};