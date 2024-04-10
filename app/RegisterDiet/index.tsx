import { Link } from "expo-router";
import { Cicle } from "../../components/DietHistory/ListDiet/style";
import { Input } from "../../components/Input";
import {
  Container,
  Form,
  FormData,
  Header,
  TitleHeader,
  InputData,
  Button,
  TitleButton,
  ButtonPressable,
  ButtonIcon,
  ButtonTitle,
} from "./style";
export default function RegisterDiet() {
  return (
    <Container>
      <Header>
        <TitleHeader>Nova Refeição</TitleHeader>
      </Header>
      <Form>
        <Input label="Nome" />
        <Input label="Descrição" style={{ height: 120 }} />
        <FormData>
          <InputData label="Data" keyboardType="numbers-and-punctuation" />
          <InputData label="Hora" keyboardType="numbers-and-punctuation" />
        </FormData>
            <TitleButton style={{marginLeft: 14,fontSize: 18,marginBottom: 6}}>Está dentro da dieta?</TitleButton>
        <FormData>
            <Button $isDiet $Selected>
                <Cicle $isDiet></Cicle>
                <TitleButton>
                    Sim
                </TitleButton>
            </Button>
            <Button $isDiet={false} $Selected={false}>
                <Cicle $isDiet={false}></Cicle>
                <TitleButton>
                    Não
                </TitleButton>
            </Button>
        </FormData>
      </Form>
      <Link href='/confirmDiet/sim' asChild>
        <ButtonPressable>
                <ButtonIcon />
                <ButtonTitle>
                    Nova Refeição
                </ButtonTitle>
            </ButtonPressable>
            </Link>
    </Container>
  );
}
