import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import Constants from "expo-constants";
import React, { useEffect } from "react";
import { getData } from "../lib/mockData";
import { AnimatedCard } from "../components/Card";
import { Logo } from "../logo";
import { Link } from "expo-router";

export default function Index() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View className="flex flex-row mb-2 items-center justify-center h-14 w-full rounded-lg">
        <View className="w-[200px] p-1 h-full rounded-md bg-white">
          <Logo />
        </View>
      </View>
      <Link href="/about" className="text-blue-500 text-xl font-bold">
        About
      </Link>
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
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    paddingInline: 10,
  },
});
