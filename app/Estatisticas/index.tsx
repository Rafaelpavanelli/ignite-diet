import { Text } from "react-native";
import {
  Container,
  ContainerHeader,
  IconBack,
  Porcentage,
  Subtitle,
  ContainerInfo,
  TitleContainerInfo,
  CardRefeicoes,
  TextCardRefeicoes,
  SubtitleCardRefeicoes,
  ContainerCardStatus,
  CardStatus,
} from "./style";
import { Link } from "expo-router";

export default function Estatisticas() {
  return (
    <Container>
      <ContainerHeader $isDiet>
        <Link href={'/'} asChild>
        <IconBack />
        </Link>
        <Porcentage>12.20%</Porcentage>
        <Subtitle>Refeições dentro da dieta</Subtitle>
      </ContainerHeader>
      <ContainerInfo>
        <TitleContainerInfo>Estatisticas gerais</TitleContainerInfo>
        <CardRefeicoes>
          <TextCardRefeicoes>22</TextCardRefeicoes>
          <SubtitleCardRefeicoes>Melhor sequencia de pratos dentro da dieta</SubtitleCardRefeicoes>
        </CardRefeicoes>
        <CardRefeicoes>
          <TextCardRefeicoes>102</TextCardRefeicoes>
          <SubtitleCardRefeicoes>Refeições geradas</SubtitleCardRefeicoes>
        </CardRefeicoes>
        <ContainerCardStatus>
          <CardStatus $isDiet>
            <TextCardRefeicoes>
              99
            </TextCardRefeicoes>
            <SubtitleCardRefeicoes>
            refeições dentro da dieta
            </SubtitleCardRefeicoes>
          </CardStatus>
          <CardStatus $isDiet={false}>
            <TextCardRefeicoes>
              99
            </TextCardRefeicoes>
            <SubtitleCardRefeicoes>
            refeições fora da dieta
            </SubtitleCardRefeicoes>
          </CardStatus>
        </ContainerCardStatus>
      </ContainerInfo>
    </Container>
  );
}
