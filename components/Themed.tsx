/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from "react";
import {
  Pressable,
  Text as DefaultText,
  View as DefaultView,
} from "react-native";
import { color } from "react-native-reanimated";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ButtonProps = ThemeProps & Pressable["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Card(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "btnBorder"
  );

  return (
    <Pressable
      android_ripple={{ color: "#eee" }}
      style={[
        { borderColor },
        {
          borderWidth: 2,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
