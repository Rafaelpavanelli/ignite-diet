import { Container,Label,Input as InputText} from "./style";
import { TextInputProps } from "react-native";
type Props =  TextInputProps & {
    label: string,
   
}

export function Input({label,...params}:Props){
    return(
        <Container>
            <Label>{label}</Label>
            <InputText {...params}/>
        </Container>
    )
}