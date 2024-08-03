// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   Touchable,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export const GymNations = () => {
//   return (
//     <View className="flex items-center">
//       <Text style={{ fontSize: "14px" }} className="text-white">
//         GymNation
//       </Text>
//       <Text style={{ fontSize: "24px" }} className="text-white">
//         GymNation
//       </Text>
//       <Text style={{ fontSize: "34px" }} className="text-white">
//         GymNation
//       </Text>
//       <Text style={{ fontSize: "44px" }} className="text-white">
//         GymNation
//       </Text>
//       <Text style={{ fontSize: "54px" }} className="text-white">
//         GymNation
//       </Text>
//       <Text
//         style={{ fontSize: "64px" }}
//         className="text-white"
//         onPress={() => alert("GYMNATION")}
//       >
//         GymNation
//       </Text>

//       <TouchableOpacity>
//         <Text style={{ fontSize: "74px" }} className="text-white">
//           GymNation
//         </Text>
//       </TouchableOpacity>
//       <StatusBar style="auto" />
//     </View>
//   );

// };

// App.js
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { TailwindProvider } from 'nativewind';

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 w-full bg-gray-800 justify-center items-center">
      <Text className="text-white font-bold text-6xl mt-20">
        {/* <Text className="text-white">Gym</Text> */}
        <Text className="text-orange-500">Nation</Text>
      </Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="w-full mb-10">
            <Text className="text-white text-xl w-full font-bold mb-4">Welcome</Text>
            <Text className="text-white mb-4">Sign in to your account!</Text>
            <TextInput
              className="bg-gray-100 p-2 rounded mb-2"
              placeholder="Username"
            />
            <TextInput
              className="bg-gray-100 p-2 rounded mb-2"
              placeholder="Password"
              secureTextEntry
            />
            <TouchableOpacity className="mb-4">
              <Text className="text-orange-500">Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-orange-500 p-2 rounded">
              <Text className="text-gray-800 text-center">Sign in</Text>
            </TouchableOpacity>
            <Text className="text-white mt-4">
              Don't have an account?{" "}
              <Text className="text-orange-500">Create</Text>
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;