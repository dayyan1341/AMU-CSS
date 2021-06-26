import { HeaderTitle } from "@react-navigation/stack";
import axios from "axios";
import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { withRepeat } from "react-native-reanimated";

import { Text, View } from "../components/Themed";
import { Notices } from "../types";

export default function NoticesScreen() {
  const window = useWindowDimensions();

  const [noticeData, setNoticeData] = React.useState<Notices>();
  const [refreshState, setRefreshState] = React.useState(true);
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
        setRefreshState(false);
        setPage(page + 1);
      })
      .catch((err) => console.log(err));
  };
  console.log(page);

  React.useEffect(fetchData, []);

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
          <View
            lightColor={"cyan"}
            darkColor={"cyan"}
            key={index}
            style={styles.renderView}
          >
            <Text style={styles.renderText}>{item.title}</Text>
            <Text style={{ color: "white" }}>
              https://adminbeta.amu.ac.in/api/v1/recent-notice/{item.file}
            </Text>
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
