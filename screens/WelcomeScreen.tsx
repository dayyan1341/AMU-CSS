import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity as TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParamList } from "../types";

function WelcomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "Welcome">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/amu.png")}
        style={styles.backgroundImage}
        resizeMode={"cover"}
        blurRadius={4}
      >
        <View style={styles.viewLogo}>
          <Image
            source={require("../assets/images/logo_amu.png")}
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.txtAmu}>AMU CALENDAR</Text>
          <Text style={styles.txtDscrption}>Your Destination for</Text>
          <Text style={styles.txtDscrption}>
            holidays events and news updates
          </Text>
          <Text style={styles.txtDscrption}>of</Text>
          <Text style={styles.txtDscrption}>Aligarh Muslim University </Text>
        </View>

        <View style={styles.viewBtn}>
          <TouchableHighlight
            style={styles.touchBtn}
            onPress={() => navigation.navigate("Root")}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "flex-start",
  },
  btnText: {
    color: "#f0ffff",
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    color: "#000",
  },
  container: {
    flex: 1,
  },
  txtDscrption: {
    color: "white",
    fontSize: 20,
  },
  txtAmu: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  imgLogo: {
    height: 200,
    width: 200,
    // resizeMode: "contain",
  },
  touchBtn: {
    height: 40,
    width: 350,
    justifyContent: "center",
    backgroundColor: "maroon",
    borderRadius: 20,
    elevation: 12,
  },
  viewBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  viewText: {
    flex: 1,
    color: "#fff",
    // top: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  viewLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 80,
  },
});
