import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { AntDesign } from '@expo/vector-icons';

export const Container = styled(View)`
  
    
`;
export const TitleSectionList = styled(Text)`
    margin: 5px;
    font-size: 18px;
    color: ${props=>props.theme.COLORS.gray_1};
    font-family: ${props=>props.theme.FONT_Family.BOLD};
`;
export const ButtonPressable = styled(TouchableOpacity)`
    flex-direction: row;
    background-color: ${props=>props.theme.COLORS.gray_2};
    padding: 16px 24px;
    color: 'white';
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-radius: 4px;
    margin-bottom: 20px;
`;
export const ButtonTitle = styled(Text)`
    color: white;
    font-family: ${props=>props.theme.FONT_Family.BOLD};
    font-size: 14px;
`;
export const ButtonIcon= styled(AntDesign).attrs({
    name: 'plus',
    size: 18,
    color: 'white'
})``;