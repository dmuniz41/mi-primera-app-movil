import { Pressable, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Logo } from "../logo";
import { CircleInfoIcon } from "./icons";

export default function RootLayout({ children }) {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => (
            <View className="h-14 items-center rounded-md bg-white flex-row w-36 px-1">
              <Logo />
            </View>
          ),
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
