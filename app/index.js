import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import React, { useEffect } from "react";
import { getData } from "../lib/mockData";
import { AnimatedCard } from "../components/Card";
import { Logo } from "../logo";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./icons";

export default function Index() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {data.length === 0 ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item, index }) => (
            <AnimatedCard post={item} index={index} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
    paddingInline: 10,
  },
});
