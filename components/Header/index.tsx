import { Container,IconContainer,Avatar } from "./style";
import { View } from "react-native";
import Logo from './../../assets/ForkKnife.svg';
import LogoTitle from './../../assets/Logo.svg'
export function Header(){
    return(
        <Container>
            <IconContainer >
                <Logo width={50} height={50}/>
                <LogoTitle width={50} height={50}/>
            </IconContainer>
            <Avatar source={{uri: 'https://github.com/RafaelPavanelli.png'}} width={50} height={50}/>
        </Container>
    )
}