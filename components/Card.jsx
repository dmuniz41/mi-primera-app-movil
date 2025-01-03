import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DetailsIcon } from "../app/icons";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

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
    <Link asChild href={`/${post.id}`}>
      <StyledPressable className="active:opacity-50 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View className="m-1 flex flex-shrink  items-center p-2 w-full rounded-lg">
          <Image source={image} className="w-24 h-24 m-2 rounded-md" />
          <View className="w-fit">
            <Text className="text-lg text-white font-extrabold font-sans">
              {post.title.toUpperCase()}
            </Text>
            <Pressable>
              <DetailsIcon />
            </Pressable>

            <Text adjustsFontSizeToFit className="text-sm text-white font-sans">
              {post.body}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 10,
  },
});
