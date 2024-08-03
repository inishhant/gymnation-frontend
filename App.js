// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   Touchable,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { GymNation } from "./screens/login.js";

// export default function App() {
  
//   return <View style={styles.container}><GymNation /></View>;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/welcome.js';
import LoginScreen from './screens/login.js'; // Make sure you create this screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
