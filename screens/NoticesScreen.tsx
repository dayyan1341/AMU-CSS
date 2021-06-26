import { HeaderTitle } from "@react-navigation/stack";
import axios from "axios";
import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Text as RNText,
} from "react-native";

import { Text, View } from "../components/Themed";
import { Notices } from "../types";

export default function NoticesScreen() {
  const window = useWindowDimensions();

  const [noticeData, setNoticeData] = React.useState<Notices>();

  React.useEffect(() => {
    axios
      .get("https://adminbeta.amu.ac.in/api/v1/recent-notice?lang=en", {
        params: {
          page: 1,
        },
      })
      .then((res) => setNoticeData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notices</Text>

      <FlatList
        data={noticeData?.data}
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
              height: window.height / 7,
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
            <Text style={{ color: "white" }}>{item.file}</Text>
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
