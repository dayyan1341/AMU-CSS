import * as React from "react";
import { StyleSheet, FlatList, useWindowDimensions } from "react-native";
import axios from "axios";

import { Text, View, Card } from "../components/Themed";
import Colors from "../constants/Colors";
import { News } from "../types";

export default function NewsScreen() {
  const [newsData, setNewsData] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2021&month=06")
      .then((res) => setNewsData(res.data.data))
      .catch((err) => alert(err));
  }, []);

  const window = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
        data={newsData}
        keyExtractor={(title) => title.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Card key={index} style={styles.renderView}>
            <Text style={styles.renderText}>{item.title}</Text>
            <Text style={{ color: "white" }}>{item.description}</Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    padding: 6,
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

{
  /* {Data?.map((item, id) => {
  return <Text key={id}>{item.name}</Text>;
})} */
}
