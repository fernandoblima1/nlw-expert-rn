import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS, ProductProps } from "@/src/utils/data/products";
import { Feather } from "@expo/vector-icons";
import { Button } from "@/src/components/Button";
import { LinkButton } from "@/src/components/LinkButton";
import { useCartStore } from "@/src/stores/cart-store";
import { useState } from "react";

export default function Product() {
  const { id } = useLocalSearchParams();
  const cartStore = useCartStore();
  const product = PRODUCTS.filter((item) => item.id === id)[0];
  const navigation = useNavigation();
  const [added, setAdded] = useState<Boolean>(false);
  const handleAddToCart = (product: ProductProps) => {
    cartStore.add(product);
    setAdded(true);
    navigation.goBack();
  };

  const priceFormat = new Intl.NumberFormat("pr-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Feather
          style={styles.addedIcon}
          name="check-circle"
          size={60}
          color="#C3FF53"
        />
      </View>
      <View>
        <Image style={styles.cover} source={product.cover} resizeMode="cover" />
        <View style={styles.info}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{priceFormat.format(product.price)}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <FlatList
            contentContainerStyle={{
              paddingVertical: 10,
              gap: 10,
            }}
            scrollEnabled={true}
            data={product.ingredients}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <Text style={styles.ingredient}>
                  {"\u2022"} {item}
                </Text>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button onPress={() => handleAddToCart(product)}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} color="#0F172A" />
          </Button.Icon>
          <Button.Text>Adicionar ao carrinho</Button.Text>
        </Button>
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 999,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  addedIcon: {
    backgroundColor: "#010111",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Inter_400Regular",
    color: "#FFF",
  },
  cover: {
    width: "100%",
    height: 200,
  },
  info: {
    gap: 15,
    paddingVertical: 40,
    paddingHorizontal: 20,
    height: "60%",
  },
  price: {
    fontSize: 28,
    color: "#C3FF53",
    fontFamily: "Montserrat_700Bold",
  },
  description: {
    color: "#94A3B8",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  ingredient: {
    color: "#94A3B8",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
  button: {
    paddingHorizontal: 20,
  },
});
