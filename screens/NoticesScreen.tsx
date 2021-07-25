import { HeaderTitle } from "@react-navigation/stack";
import axios from "axios";
import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Linking,
  Button,
  Pressable,
} from "react-native";
import { withRepeat } from "react-native-reanimated";

import { Text, View, Card } from "../components/Themed";
import Colors from "../constants/Colors";
import { Notices } from "../types";

export default function NoticesScreen() {
  const window = useWindowDimensions();

  const [noticeData, setNoticeData] = React.useState<Notices>();
  const [refreshState, setRefreshState] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const fetchData = () => {
    axios
      .get("https://adminbeta.amu.ac.in/api/v1/recent-notice?lang=en", {
        params: {
          page,
        },
      })
      .then((res) => {
        setNoticeData(res.data.data);
        // setRefreshState(false);
        // setPage(page + 1);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(fetchData, []);

  //https://adminbeta.amu.ac.in/storage/{item.file}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notices</Text>

      <FlatList
        data={noticeData?.data}
        keyExtractor={(title) => title.id.toString()}
        showsVerticalScrollIndicator={false}
        bounces
        refreshing={refreshState}
        onRefresh={() => {
          fetchData();
        }}
        renderItem={({ item, index }) => (
          <Card key={index} style={styles.renderView}>
            <Text style={styles.renderText}>{item.title}</Text>
            <Pressable
              android_ripple={{ color: "#eee" }}
              style={styles.renderButton}
              onPress={() =>
                Linking.openURL(
                  `https://adminbeta.amu.ac.in/storage/${item.file}`
                )
              }
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                OPEN PDF
              </Text>
            </Pressable>
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
    justifyContent: "flex-start",
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
  renderButton: {
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: "white",
  },
});
