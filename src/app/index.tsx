import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Header } from "../components/Header";
import { CategoryButton } from "../components/CaterogyButton";
import { CATEGORIES } from "../utils/data/products";

export default function App() {
  const categories = CATEGORIES;
  return (
    <View style={styles.container}>
      <Header title="Cardápio" />
      <CategoryButton title="Todos" />
      <FlatList
        data={categories}
        renderItem={({ item }) => {
          return <CategoryButton title={item} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Inter_700Bold",
  },
});
