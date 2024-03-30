import { createContext } from "react";
import { ReactNode } from "react";
export const DietContext = createContext({} as PropsContext);

export type PropsContext = {
    addDiet: (diet:DietParams) => Promise<void>;
}

type DietParams = {
    name:string,
    description:string,
    date:string,
    hour:string,
    isDiet:boolean
};

type Props = {
    children: ReactNode
};
export const DietContextProvider=({children}:Props)=>{
    async function addDiet(diet: DietParams){
        try{
            console.log(diet);
        }catch(error){
            console.log(error)
        }
    }
    return(
        <DietContext.Provider value={{addDiet}}>
            {children}
        </DietContext.Provider>
    )
}