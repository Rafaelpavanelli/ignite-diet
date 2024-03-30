import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex-direction: row;
  padding: 50px 0px;
  justify-content: space-between;
`;
export const IconContainer = styled(View)`
  flex-direction: row;
`;
export const Avatar = styled(Image)`
    border-radius: 100px;
    border-width: 2px;
    border-color: ${(props)=>props.theme.COLORS.gray_2};

`;
