import { useRef, useState } from "react";
import { Text, View, StyleSheet, FlatList, SectionList } from "react-native";
import { Header } from "../components/Header";
import { CategoryButton } from "../components/CaterogyButton";
import { CATEGORIES, MENU } from "../utils/data/products";
import { Product } from "../components/Product";
import { Link } from "expo-router";
import { useCartStore } from "../stores/cart-store";

export default function App() {
  const categories = CATEGORIES;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const cartStore = useCartStore();
  const sectionListRef = useRef<SectionList>(null);
  const totalItems = cartStore.products.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  function handleSelectCategory(category: string) {
    setSelectedCategory(category);

    const sectionIndex = CATEGORIES.findIndex((item) => item === category);
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Cardápio" cardQuantityItems={totalItems} />
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", marginBottom: 10 }}
        contentContainerStyle={{
          paddingVertical: 10,
          gap: 10,
        }}
        renderItem={({ item }) => {
          return (
            <CategoryButton
              isSelected={selectedCategory === item}
              title={item}
              onPress={() => {
                handleSelectCategory(item);
              }}
            />
          );
        }}
      />
      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
          gap: 10,
          paddingBottom: 190,
        }}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => {
          return (
            <View>
              <Text style={styles.text}>{title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 15,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Inter_700Bold",
  },
  itemTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Inter_400Regular",
  },
});
