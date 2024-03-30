export type RefeicaoTDO = {
    title: string;
    data: ParamsRefeicaoDTO[]
   
}
export type ParamsRefeicaoDTO = {
    description:string;
    hour: string;
    isDiet: boolean;
    name:string;
}