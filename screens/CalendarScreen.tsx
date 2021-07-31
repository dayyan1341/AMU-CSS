import * as React from "react";
import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

import { Text, View } from "../components/Themed";
// import { Agenda, Calendar } from "react-native-calendars";

const { width, height } = Dimensions.get("window");

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      {/* <Calendar
        minDate={2020}
        displayLoadingIndicator={true}
        onDayPress={(day) => {
        }}
        // Specify style for calendar container element. Default = {}
        style={{
          borderWidth: 1,
          borderColor: "#ffffff",
          height: 330,
          width: width,
          elevation: 6,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          monthTextColor: "cyan",
          indicatorColor: "cyan",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      /> */}

      <View
        style={styles.separator}
        lightColor="black"
        //lightColor="#eee"
        darkColor="rgba(255,255,255,1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
});

//for later use => an horizontal line
