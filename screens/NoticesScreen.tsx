import { Ionicons } from "@expo/vector-icons";
import { HeaderTitle } from "@react-navigation/stack";
import axios from "axios";
import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Linking,
  Pressable as TouchableOPacity,
  TouchableOpacity,
} from "react-native";

import { Text, View, Card } from "../components/Themed";
import Colors from "../constants/Colors";
import { Notices } from "../types";

export default function NoticesScreen() {
  const { height, width } = useWindowDimensions();

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
        setRefreshState(false);
        // setPage(page + 1);
      })
      .catch((err) => console.log(err));
  };

  const backArrowHandler = () => {
    if (page > 2) setPage(page - 1);
  };

  const forwardArrowHandler = () => {
    setPage(page + 1);
    setRefreshState(true);
  };

  React.useEffect(fetchData, [page]);

  //https://adminbeta.amu.ac.in/storage/{item.file}
  return (
    <View style={styles.container}>
      <View
        style={{
          height: height / 18,
          width,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (page > 1) {
              setPage(page - 1);
              setRefreshState(true);
            } else {
              alert("No going back from here!");
            }
          }}
        >
          <Ionicons name={"md-arrow-back"} size={24} />
          <Text>Prev</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Notices</Text>

        <TouchableOpacity onPress={forwardArrowHandler}>
          <Ionicons name={"md-arrow-forward"} size={24} />
          <Text>Next</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={noticeData?.data}
        keyExtractor={(title) => title.id.toString()}
        showsVerticalScrollIndicator={false}
        refreshing={refreshState}
        onRefresh={() => {
          fetchData();
        }}
        renderItem={({ item, index }) => (
          <Card key={index} style={styles.renderView}>
            <Text style={styles.renderText}>{item.title}</Text>
            <TouchableOPacity
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
            </TouchableOPacity>
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
