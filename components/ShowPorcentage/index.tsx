import { Link } from "expo-router";
import { Container,Title,Icon,Subtitle} from "./style";

export function ShowPorcentage(){
    const refeição = 9.50;
    return(
        <Container $primary={refeição > 10 ? true: false}>
            <Title>10.20%</Title>
            <Subtitle >Refeições dentro da dieta</Subtitle>
            <Link href='/Estatisticas' asChild style={{position: 'absolute', right: 20, top: 10}}>
            <Icon  />
            </Link>
        </Container>
    )
}