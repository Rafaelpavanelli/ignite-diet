import { Text } from "react-native";
import { ParamsRefeicaoDTO } from "../../../DTO/RefeicaoDTO";
import { Container, Name, TextHour,Cicle } from "./style";

type Props = {
    data: ParamsRefeicaoDTO
}

export function ListDiet({data}: Props){
   
    return(
        <Container>
            <TextHour>{data.hour}</TextHour>
            <Name>{data.name}</Name>
            <Cicle $isDiet={data.isDiet}></Cicle>
        </Container>
    )
}