import { View,Text } from "react-native";
import styled from "styled-components";
import { Feather } from '@expo/vector-icons';

export const Container = styled(View)<{$primary:boolean}>`
    background-color: ${(props)=> props.$primary ? props.theme.COLORS.green_light : props.theme.COLORS.red_light};
    justify-content: center;
    align-items: center;
    height: 150px;
    position: relative;
`;
export const Title = styled(Text)`
    font-size: 32px;
    font-family: ${props=>props.theme.FONT_Family.BOLD}
`;
export const Subtitle = styled(Text)`
    font-size: 16px;
    color: ${props=>props.theme.COLORS.gray_3};
`;
export const Icon = styled(Feather).attrs({
    size: 30,
    color: 'gray',
    name: 'arrow-up-right'
})`
    position: absolute;
    top: 20px;
    right: 20px;
`;