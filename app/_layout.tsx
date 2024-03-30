import { Stack } from "expo-router/stack";

import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { StatusBar } from "expo-status-bar";
import { DietContextProvider } from "../context/DietContext";
export default function LayoutRoot() {
  return (
    <ThemeProvider theme={theme}>
      <DietContextProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name={'Estatisticas/index'} options={{
            headerShown: false,
            presentation: 'containedModal',
            animation: 'slide_from_bottom'
          }}/>
          <Stack.Screen name={'RegisterDiet/index'}  options={{
            presentation: 'containedModal',
            animation: 'slide_from_bottom',
            headerTransparent: true,
            headerTitle: ''
          
           

          }}/>
        </Stack>
        <StatusBar style="dark" backgroundColor="green" />
      </DietContextProvider>
    </ThemeProvider>
  );
}
