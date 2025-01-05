import { Tabs } from "expo-router";
import { CircleInfoIcon, HomeIcon } from "../icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
