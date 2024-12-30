import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="text-blue-500 text-xl font-bold mt-4">
        Home
      </Link>
      <Text className="text-2xl text-white mb-8 font-bold">About</Text>
      <Text className="text-xl text-white/90 mb-4">
        Exercitation exercitation duis eiusmod ullamco veniam laborum dolor do
        pariatur labore reprehenderit ullamco. Est aute ex id sint nisi ipsum
        enim deserunt tempor cupidatat mollit amet cillum eiusmod. Magna aliquip
        duis enim excepteur elit tempor consequat Lorem dolor minim. Eu esse ea
        veniam esse consectetur cupidatat id deserunt. Nisi irure esse dolore
        dolore adipisicing exercitation cupidatat fugiat qui aliqua pariatur
        velit. Ut consequat sunt exercitation excepteur ut irure adipisicing.
        Cupidatat excepteur proident eu amet culpa ad in incididunt et nostrud.
      </Text>
    </ScrollView>
  );
}
