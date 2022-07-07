import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { Landing, Home } from "./screens";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    PTSansBold: require("./assets/fonts/PTSans-Bold.ttf"),
    PTSansRegular: require("./assets/fonts/PTSans-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Landing"
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Landing} name="Landing" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
