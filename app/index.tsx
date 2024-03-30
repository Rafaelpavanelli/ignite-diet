import { Text, View } from "react-native";
import {
    useFonts,
    Nunito_400Regular,
    Nunito_700Bold,
  } from "@expo-google-fonts/nunito";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ShowPorcentage } from "../components/ShowPorcentage";
import { DietHistory } from "../components/DietHistory";
  
export default function Home(){
    let [fontsLoaded, fontError] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
      return(
        <View style={{paddingHorizontal: 20}}>
        <Header />
        <ShowPorcentage />
        <DietHistory />
        </View>
      )
    }