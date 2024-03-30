import { Text, View } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled(View)`
    background-color: ${props=>props.theme.COLORS.green_light};
    height: screen;
`;
export const ContainerHeader = styled(View)<{ $isDiet: boolean }>`
  background-color: ${(props) =>
    props.$isDiet
      ? props.theme.COLORS.green_light
      : props.theme.COLORS.red_light};
  height: 200px;
  padding-top: 80px;
  align-items: center;
`;
export const IconBack = styled(AntDesign).attrs({
  name: "arrowleft",
  size: 24,
})`
  position: absolute;
  left: 20px;
  top: 60px;
`;
export const Porcentage = styled(Text)`
  font-size: 32px;
  font-family: ${(props) => props.theme.FONT_Family.BOLD};
  color: ${(props) => props.theme.COLORS.gray_1};
`;
export const Subtitle = styled(Text)`
    font-size: 14px;
    color: ${props=>props.theme.COLORS.gray_4};
    font-family: ${props=>props.theme.FONT_Family.REGULAR};
`;
export const ContainerInfo = styled(View)`
    gap: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${props=>props.theme.COLORS.gray_7};
    height: 100%;
    padding: 40px;
    align-items: center;
`;
export const TitleContainerInfo = styled(Text)`
    font-size:14px;
    font-family: ${props=>props.theme.FONT_Family.BOLD};
`;
export const CardRefeicoes = styled(View)`
    height: 100px;
    background-color: ${props=>props.theme.COLORS.gray_6};
    width: 100%;
    justify-content: center;
    align-items: center;
    padding:0px 10px;
    border-radius: 20px;
`;
export const TextCardRefeicoes = styled(Text)`
    font-size:24px;
    font-family: ${props=>props.theme.FONT_Family.BOLD};
`;
export const SubtitleCardRefeicoes = styled(Text)`
    font-size:14px;
    font-family: ${props=>props.theme.FONT_Family.REGULAR};
    text-align:center;
    
`;
export const ContainerCardStatus = styled(View)`
    gap: 10px;
    width: 100%;
    flex-direction: row;
`;
export const CardStatus = styled(View)<{$isDiet:boolean}>`
    background-color: ${props=>props.$isDiet ? props.theme.COLORS.green_light: props.theme.COLORS.red_light};
    height: 100px;
    width: 48%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

`;