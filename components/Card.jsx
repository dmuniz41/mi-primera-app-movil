import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

const image = require("../assets/Luffy.jpeg");

export function AnimatedCard({ post, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <Card post={post} />
    </Animated.View>
  );
}

export function Card({ post }) {
  return (
    <View className="m-1 flex flex-row items-center p-2 w-full rounded-lg bg-white">
      <Image source={image} className="w-24 h-24 m-2 rounded-md" />
      <View>
        <Text className="text-lg font-extrabold font-sans">
          {post.title.toUpperCase()}
        </Text>
        <Text adjustsFontSizeToFit className="text-sm font-sans">
          {post.body}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 10,
  },
});
