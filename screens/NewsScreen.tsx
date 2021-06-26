import * as React from "react";
import {
  StyleSheet,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import axios from "axios";

import { Text, View } from "../components/Themed";
import { News } from "../types";

export default function NewsScreen() {
  const [newsData, setNewsData] = React.useState<News>();

  React.useEffect(() => {
    axios
      .get("https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2012&month=10")
      .then((res) => setNewsData(res.data.data))
      .catch((err) => alert(err));
  }, []);

  const window = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
        data={newsData?.data}
        keyExtractor={(title) => title.id.toString()}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              backgroundColor: "maroon",
              margin: 20,
              marginBottom: 20,
              borderRadius: 15,
              padding: 10,
              width: window.width / 1.2,
              height: window.height / 4,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
                color: "white",
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: "white" }}>{item.description}</Text>
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
    // justifyContent: "center",
    padding: 20,
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

{
  /* {Data?.map((item, id) => {
  return <Text key={id}>{item.name}</Text>;
})} */
}
