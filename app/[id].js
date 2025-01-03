import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Details({ params }) {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View>
        <Text className="text-2xl text-white font-bold">Details{id}</Text>
        <Link asChild href="/" className="text-blue-400">
          <Text className="text-2xl text-white font-bold">Back to Home</Text>
        </Link>
      </View>
    </View>
  );
}
