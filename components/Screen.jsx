import { View } from "react-native";

export function Screen({ children }) {
  return <View className="flex-1 pt-8 bg-black px-4">{children}</View>;
}
