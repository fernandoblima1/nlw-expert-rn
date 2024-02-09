import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import {
  Inter_700Bold,
  Inter_400Regular,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_300Light,
  useFonts,
} from "@expo-google-fonts/inter";
import { Slot } from "expo-router";
import { Loading } from "../components/Loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_900Black,
    Inter_600SemiBold,
    Inter_300Light,
    Montserrat_700Bold,
  });

  return (
    <SafeAreaView style={styles.container}>
      {fontsLoaded ? <Slot /> : <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
});
