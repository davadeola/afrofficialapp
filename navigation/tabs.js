import React from "react";

import { Image, View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, icon, name }) => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      width: 100,
    }}
  >
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        height: 30,
        width: 30,
        tintColor: focused ? COLORS.accent1 : COLORS.secondary,
        marginBottom: SIZES.base,
      }}
    />
    <Text
      style={{
        ...FONTS.body3,
        color: focused ? COLORS.accent1 : COLORS.secondary,
      }}
    >
      {name}
    </Text>
  </View>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.primary,
          height: 100,
          borderTopEndRadius: SIZES.radius,
          borderTopStartRadius: SIZES.radius,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={assets.home} name="Home" />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={assets.heart} name="Favorite" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
