import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES } from "../constants";

const Landing = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
        }}
      >
        Landing is here
      </Text>
    </SafeAreaView>
  );
};

export default Landing;
