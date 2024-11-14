import axios from "axios";
import { IAnimal } from "../models/IAnimal";

const API_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimalsApi = async(): Promise<IAnimal[]> =>{
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        localStorage.setItem("animals", JSON.stringify(response.data));
        return response.data;
    }
    catch (error) {
        console.log(error);
        console.log("unable to get data");
        return[];
    }
}

export const getAnimalsLS = (): IAnimal[] => {
    const animals = localStorage.getItem("animals");
    return animals ? JSON.parse(animals) : [];
};


export const getAnimalLS = (id: number): IAnimal | undefined => {
    const animals = localStorage.getItem("animals");
    const parsedAnimals: IAnimal[] = animals ? JSON.parse(animals) : [];
    return parsedAnimals.find((animal: IAnimal) => animal.id === id);
};