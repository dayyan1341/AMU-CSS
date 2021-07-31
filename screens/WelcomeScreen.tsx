import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../types";

import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, Button } from "../components/Themed";
import Colors from "../constants/Colors";
import { useThemeColor } from "../components/Themed";

export default function WelcomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
  const borderColor = useThemeColor({}, "btnBorder");
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        height={height}
        width={width}
      >
        <Image
          source={require("../assets/images/icon.png")}
          style={{ height: 100, width: 100, alignSelf: "center" }}
        />
        <Text>One Place to get all the information for our great CLUB</Text>
        {/* <Pressable
          android_ripple={{ color: "#eee" }}
          style={[styles.btn, { borderColor }]}
          onPress={() => navigation.navigate("Root")}
        >
          <Text style={{ color: "black", textAlign: "center" }}>CONTINUE</Text>
        </Pressable> */}

        <Button
          android_ripple={{ color: "#eee" }}
          style={[styles.btn, { borderColor: borderColor }]}
          onPress={() => navigation.navigate("Root")}
        >
          <Text style={{ color: "black", textAlign: "center" }}>CONTINUE</Text>
        </Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  btn: {
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 30,
    padding: 10,
    borderWidth: 2,
  },
});
