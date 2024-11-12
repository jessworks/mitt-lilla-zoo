import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const getAnimals = async(): Promise<IAnimal[]> =>{
    try {
        const response = await axios.get(
            `https://animals.azurewebsites.net/api/animals`
        );
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        console.log("unable to get data");
        return[];
    }
}