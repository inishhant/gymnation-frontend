// WelcomeScreen.js
import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import logoSvg from '../assets/images/gym-svgrepo-com.svg';
import GymRodLogo from "../assets/SVG/gymRod.js";
import GymLiftLogo from "../assets/SVG/gymLift.js";

const { width, height } = Dimensions.get("window");
const WelcomeScreen = ({ navigation }) => {
  //   const tailwind = useTailwind();
  const buttonAnim = useRef(new Animated.Value(-100)).current;
  const word = "GNation";
  const [displayedText, setDisplayedText] = useState("");
  const [logoPositions, setLogoPositions] = useState([]);

  useEffect(() => {
    // Calculate number of columns and rows for even distribution
    const cols = 5; // Number of columns
    const rows = 10; // Number of rows
    const logoSize = 50; // Size of the logo (width and height)

    // Calculate spacing between logos
    const xSpacing = (width - logoSize) / (cols - 1);
    const ySpacing = (height - logoSize) / (rows - 1);

    const positions = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        positions.push({
          top: row * ySpacing,
          left: col * xSpacing,
        });
      }
    }

    setLogoPositions(positions);

    // Handle typing effect
    let currentText = "";
    word.split("").forEach((letter, index) => {
      setTimeout(() => {
        currentText += letter;
        setDisplayedText(currentText);
      }, index * 200); // Adjust the speed of the typing effect
    });

    // Animate button in from the left
    Animated.timing(buttonAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const buttonStyle = {
    transform: [{ translateX: buttonAnim }],
  };

  return (
    <LinearGradient colors={["#000000", "#434343"]} className="flex-1 w-full">
      <SafeAreaView
        style={styles.container}
        className="flex-1 w-full justify-center items-center"
      >
        {logoPositions.map((position, index) => (
          <View
            key={index}
            className="absolute w-12 h-12 justify-center items-center m-3"
            style={{ top: position.top, left: position.left }}
          >
            <GymRodLogo />
            {/* <GymLiftLogo /> */}
          </View>
        ))}
        <View className="flex-row">
          <Text className="text-8xl font-bold text-white mb-10 z-1">
            {displayedText}
          </Text>
        </View>
        {/* <TouchableOpacity
          className="absolute bottom-12 bg-white py-4 px-8 rounded-full"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-lg text-black">Get Started</Text>
        </TouchableOpacity> */}

        <Animated.View
          style={[buttonStyle, styles.button]} // Apply animated style
          className="absolute bottom-12"
        >
          <TouchableOpacity
            className="bg-white py-4 px-20 rounded-full opacity-90"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-lg text-black">Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    background: "linear-gradient(to bottom, #000000, #434343)",
  },
});

export default WelcomeScreen;
