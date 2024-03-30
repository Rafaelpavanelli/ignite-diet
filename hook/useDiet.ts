import { useContext } from "react";
import { DietContext } from "../context/DietContext";

export function useDiet(){
    const context = useContext(DietContext);
    return context;
}