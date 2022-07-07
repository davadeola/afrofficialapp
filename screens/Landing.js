import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const Landing = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={assets.bgPattern}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{ alignItems: "center", paddingHorizontal: SIZES.padding }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              marginBottom: SIZES.padding,
            }}
          />
          <Text style={{ ...FONTS.body2, color: COLORS.secondary }}>
            Find the latest in African Fashion to suit your busy lifestyle
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.accent1,
              alignItems: "center",
              width: "100%",
              borderRadius: SIZES.radius,
              padding: SIZES.font,
              marginTop: SIZES.padding,
            }}
          >
            <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Discover</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Landing;
