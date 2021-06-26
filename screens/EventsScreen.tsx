import axios from "axios";
import * as React from "react";
import { Alert, StyleSheet, FlatList } from "react-native";

import { Text, View } from "../components/Themed";

export default function EventsScreen() {
  const [eventData, setEventData] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://api.amu.ac.in/api/v1/amu-events?lang=en&year=2021")
      .then((res) => {
        setEventData(res.data.data);
      })
      .catch((err) => alert(err));
  }, []);

  console.log(eventData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <FlatList
        data={eventData}
        keyExtractor={(item) => item.file}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.renderView} darkColor={"cyan"}>
            <Text style={styles.renderText}>{item.title}</Text>
          </View>
        )}
      />
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
  renderText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  renderView: {
    margin: 20,
    marginBottom: 20,
    borderRadius: 15,
    padding: 10,
    flex: 1,
  },
});
