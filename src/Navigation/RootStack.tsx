import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screen/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabBarScreen from "../Components/TabStack";
import { DetailUser } from "../Screen/DetailUser/DetailUser";

const RootStack = ({}) => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={TabBarScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name={'DetailUser'}
          component={DetailUser}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
