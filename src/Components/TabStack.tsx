import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../Screen/Home/Home";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from "react-native";
import TabBarCustom from "./TabBarCustom";

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 56,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    borderTopColor: 'transparent',
    shadowColor: 'grey',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
});

const TabBarScreen = () => {
  const TabNav = createBottomTabNavigator()

  return (
    <TabNav.Navigator
      screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: styles.tabBar,
    }}>
      <TabNav.Screen name={'Home'}
                     component={HomeScreen}
                     options={{
                       tabBarIcon: ({ color, size }) => (
                         <FontAwesome name="home" color={color} size={size} />
                       )}}/>
      <TabNav.Screen name={'Search'}
                     component={HomeScreen}
                     options={{ headerShown: false,
                       tabBarIcon: ({ color, size }) => (
                         <FontAwesome name="search" color={color} size={size} />
                       )}}/>
      <TabNav.Screen name={'Notification'}
                     component={HomeScreen}
                     options={{ headerShown: false,
                       tabBarIcon: ({ color, size }) => (
                         <FontAwesome name="bell-o" color={color} size={size} />
                       )}}/>
      <TabNav.Screen name={'Setting'}
                     component={HomeScreen}
                     options={{ headerShown: false,
                       tabBarIcon: ({ color, size }) => (
                         <FontAwesome name="gears" color={color} size={size} />
                       )}}/>
    </TabNav.Navigator>
  )
}

export default TabBarScreen;
