import { Link, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { getPostDetails } from "../lib/mockData";
import { Screen } from "../components/Screen";

export default function Details({ params }) {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      getPostDetails(id).then((data) => setPost(data));
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "Detalles",
        }}
      />
      <View className="">
        {post === null ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <ScrollView>
            <Text className="text-2xl text-yellow-500 font-bold">
              Title: {post.title}
            </Text>
            <Text className="text-xl text-white">Description: {post.body}</Text>
            <Link asChild href="/">
              <Text className="text-2xl text-blue-500 font-bold">
                Back to Home
              </Text>
            </Link>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
