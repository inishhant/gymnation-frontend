// SvgComponent.js
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Generate a random degree between 0 and 360
    const randomDegree = Math.floor(Math.random() * 360);

    // Define rotation animation
    Animated.timing(rotateAnim, {
      toValue: randomDegree,
      duration: 1000, // Duration of the animation
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  // Interpolate rotation value to a transform style
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
      <Svg
        width={50}
        height={50}
        viewBox="0 0 32 32"
        style={{ fill: "white" }}
        {...props}
      >
        <Path d="M32 15.467h-3.147v-6.4h-3.2V6.4h-4.267v9.067H10.719V6.4H6.452v2.667h-3.2v6.4H-.001v1.067h3.253v6.4h3.2v2.667h4.267v-9.067h10.667v9.067h4.267v-2.667h3.2v-6.4H32v-1.067zm-27.68 6.4V10.134h2.133v11.733H4.32zm5.333 2.666H7.52V7.466h2.133v17.067zm14.934 0h-2.133V7.466h2.133v17.067zm3.2-2.666h-2.133V10.134h2.133v11.733z" />
      </Svg>
    </Animated.View>
  );
};

export default SvgComponent;
