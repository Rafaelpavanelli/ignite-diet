import { Text, TextInput, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  margin: 10px;
`;
export const Label = styled(Text)`
  font-family: ${(props) => props.theme.FONT_Family.BOLD};
  font-size: 18px;
  color: ${(props) => props.theme.COLORS.gray_2};
`;
export const Input = styled(TextInput).attrs({})`
  padding: 10px;
  color: ${(props) => props.theme.COLORS.gray_1};
  font-family: ${(props) => props.theme.FONT_Family.REGULAR};
  font-size: 16px;
  border-color: ${(props) => props.theme.COLORS.gray_5};
  border-width: 2px;
  border-radius: 10px;
`;
