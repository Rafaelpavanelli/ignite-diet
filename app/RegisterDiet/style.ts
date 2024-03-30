import { Pressable, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { AntDesign } from '@expo/vector-icons';
export const Container = styled(View)`
  background-color: ${(props) => props.theme.COLORS.gray_5};
  max-height: screen;
  position: relative;

`;
export const Header = styled(View)`
  height: 120px;
  justify-content: center;
  align-items: center;
`;
export const TitleHeader = styled(Text)`
  font-size: 24px;
  font-family: ${(props) => props.theme.FONT_Family.BOLD};
  margin-top: 40px;
`;
export const Form = styled(View)`
  padding: 20px 10px 0px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: white;
  
`;
export const FormData = styled(View)`
  flex-direction: row;
  width: 100%;
  gap: 20px;
  justify-content: space-evenly;
`;
export const InputData = styled(Input)`
  min-width: 45%;
`;
export const Button = styled(Pressable)<{
  $Selected: boolean;
  $isDiet: boolean;
}>`
  padding: 20px 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.$Selected) {
      if (props.$isDiet) {
        return props.theme.COLORS.green_light;
      } else {
        return props.theme.COLORS.red_light;
      }
    } else {
      return props.theme.COLORS.gray_5;
    }
  }};
  border-width: 1px;
  border-color: ${(props) => {
    if (props.$Selected) {
      if (props.$isDiet) {
        return props.theme.COLORS.green_mid;
      } else {
        return props.theme.COLORS.red_dark;
      }
    } else {
      return props.theme.COLORS.gray_5;
    }
  }};
  border-radius: 10px;
  border-color: ${(props) =>
    props.$Selected && props.$isDiet
      ? props.theme.COLORS.green_light
      : props.theme.COLORS.red_light};
  border-width: 1px;
`;
export const TitleButton = styled(Text)`
  font-family: ${(props) => props.theme.FONT_Family.BOLD};
  font-size: 14px;
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
    position: absolute;
    
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