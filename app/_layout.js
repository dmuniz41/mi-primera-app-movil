import { View } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout({ children }) {
  return (
    <View className="bg-black h-full w-full">
      <Slot />
    </View>
  );
}
