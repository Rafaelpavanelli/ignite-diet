import React from "react";
import { SectionList, Text } from "react-native";
import { RefeicaoTDO } from "../../DTO/RefeicaoDTO";
import { ButtonIcon, ButtonPressable, ButtonTitle, Container, TitleSectionList } from "./style";
import { ListDiet } from "./ListDiet";
import { Link } from "expo-router";

export function DietHistory() {
    const data: RefeicaoTDO[] = [
        {
            title: '22-10-20',
            data: [{
                hour: '22:30',
                description: "Refeição boa",
                isDiet: true,
                name: 'Franguinho ummmmm'
            },{
                hour: '22:20',
                description: "Refeição boa",
                isDiet: true,
                name: 'Franguinho ummmmm'
            }]
        },
        {
            title: '22-22-20',
            data: [{
                description: 'Uma refeição ruim',
                hour: '20:10',
                isDiet: false,
                name: 'Bolo não pode ECAAAAAAAAAAAAAAAAAAAAAAAAAAAa'
            }]
        },
    ];

    return (
        <Container>
            <Text style={{fontSize: 14,marginBottom: 4,marginTop: 40}}>Refeições</Text>
            <Link href={'/RegisterDiet'} asChild>
            <ButtonPressable>
                <ButtonIcon />
                <ButtonTitle>
                    Nova Refeição
                </ButtonTitle>
            </ButtonPressable>
            </Link>
            <SectionList 
                sections={data}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => <ListDiet data={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <TitleSectionList>{title}</TitleSectionList>
                )}
            />
        </Container>
    );
}
