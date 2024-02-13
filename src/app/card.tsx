import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { Header } from "../components/Header";
import { useCartStore } from "../stores/cart-store";
import { Product } from "../components/Product";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "../components/LinkButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { ProductProps } from "../utils/data/products";

export default function Card() {
  const cartStore = useCartStore();
  const [address, setAddress] = useState<string>("");
  const handleProductRemove = (product: ProductProps) => {
    Alert.alert("Deseja remover o produto do carrinho?", product.title, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => cartStore.removeProduct(product.id),
      },
    ]);
  };
  const handleOrder = () => {};
  const priceFormat = new Intl.NumberFormat("pr-BR", {
    style: "currency",
    currency: "BRL",
  });
  const totalItems = cartStore.products.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = cartStore.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <View style={styles.container}>
      <Header title="Seu carrinho" backButton />
      {totalItems > 0 ? (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraHeight={200}
        >
          <View style={{ flex: 1 }}>
            <ScrollView>
              <View style={styles.products}>
                {cartStore.products.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      data={product}
                      onPress={() => handleProductRemove(product)}
                    />
                  );
                })}
              </View>
              <View style={styles.totalPrice}>
                <Text style={styles.text}>Total: </Text>
                <Text style={styles.price}>
                  {priceFormat.format(totalPrice)}
                </Text>
              </View>
              <Input
                multiline
                placeholder="Escreva seu endereço aqui..."
                placeholderTextColor={"#94A3B8"}
                cursorColor={"#C3FF53"}
                onChangeText={(text) => setAddress(text)}
                style={styles.input}
                textContentType="fullStreetAddress"
              />
            </ScrollView>
            <Button onPress={handleOrder}>
              <Button.Text>Finalizar compra</Button.Text>
              <Button.Icon>
                <Feather name="arrow-right-circle" size={20} />
              </Button.Icon>
            </Button>
            <LinkButton title="Voltar ao cardápio" href="/" />
          </View>
        </KeyboardAwareScrollView>
      ) : (
        <Text style={styles.emptyCart}>Seu carrinho está vazio</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  products: {
    flex: 1,
  },
  emptyCart: {
    color: "#94A3B8",
    fontSize: 14,
    flex: 1,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Inter_400Regular",
  },
  totalPrice: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 20,
  },
  price: {
    color: "#C3FF53",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  text: {
    color: "#FFF",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#1E293B",
    width: "100%",
    color: "#FFF",
    height: 150,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 20,
  },
});
