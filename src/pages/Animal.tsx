import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IAnimal } from "../models/IAnimal";
import { getAnimalLS } from '../services/animalsService';


export const Animal = () => {
    const { id } = useParams<{ id:string }>();
    const [animal, setAnimal] = useState<IAnimal | undefined>(undefined);
    const [animalFed, setAnimalFed] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [timeFed, setTimeFed] = useState(0);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (id) {
            const animalFromLS = getAnimalLS(Number(id));
            setAnimal(animalFromLS);
        }
    }, [id]);

    const handleFeedClick = () => {
        setAnimalFed(true);
        setBtnDisabled(true);
        setTimeFed(new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }));
    };

    const handleBackToZooClick = () => {
        navigate(`/`);
    }

    return (
        <>
            {animal ? (
            <>
                <h1>{animal.name}</h1>
                <p>{animal.yearOfBirth}</p>
                <img src={animal.imageUrl} alt={animal.name} style={{ width: "200px", height: "auto" }} />
                <p>{animal.shortDescription}</p>
                <button onClick={handleFeedClick} disabled={btnDisabled}>Mata {animal.name}</button>
                <button onClick={handleBackToZooClick}>Tillbaka till zoo</button>
                {animalFed && <p>{animal.name} matades {timeFed}.</p>}
                <h3>Lär dig mer</h3>
                <p>{animal.name}s latinska namn är {animal.latinName}</p>
                <p>{animal.longDescription}</p>
            </>
            ) : (
                <h1>Animal not found</h1>
            )}
        </>
    )
};