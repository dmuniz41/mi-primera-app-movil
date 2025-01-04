import { StatusBar } from "expo-status-bar";
import { FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { getData } from "../lib/mockData";
import { AnimatedCard } from "../components/Card";
import { Screen } from "../components/Screen";

export default function Index() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <Screen>
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
    </Screen>
  );
}
