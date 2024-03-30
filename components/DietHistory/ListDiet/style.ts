import { Text, View } from "react-native";
import styled from "styled-components";
export const Container = styled(View)`
  padding: 15px 0px;
  flex-direction: row;
  width: screen;
  border: 1px solid ${(props) => props.theme.COLORS.gray_4};
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
`;
export const Name = styled(Text).attrs({
    numberOfLines: 1,
    ellipsizeMode: "tail",
})`
    font-family: 'Nunito_400Regular';
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  flex-wrap: nowrap;
  text-overflow: ellipsis;
`;
export const TextHour = styled(Text)`
  width: 60px;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.FONT_Family.BOLD};
  font-size: 16px;
  margin: 0px 10px;
  border-right-width: 2px;
  border-color: gray;
`;
export const Cicle = styled(View)<{ $isDiet: boolean }>`
  background-color: ${(props) =>
    props.$isDiet ? props.theme.COLORS.green_mid : props.theme.COLORS.red_mid};
  width: 20px;
  height: 20px;
  border-radius: 100px;
  position: absolute;
  right: 10px;
`;
