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
                <img src={animal.imageUrl} alt={animal.name} style={{ width: "200px", height: "auto" }} />
                <button onClick={handleFeedClick} disabled={btnDisabled}>Feed Me</button>
                {animalFed && <p>{animal.name} was fed {timeFed}.</p>}
                <button onClick={handleBackToZooClick}>Back to Zoo</button>
            </>
            ) : (
                <h1>Animal not found</h1>
            )}
        </>
    )
};