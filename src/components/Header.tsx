import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
type HeaderProps = {
  title: string;
  cardQuantityItems: number;
};

export const Header = ({ title, cardQuantityItems }: HeaderProps) => {
  const [itemsCounter, setItemsCounter] = useState(cardQuantityItems);

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.cart} activeOpacity={0.5}>
        {itemsCounter > 0 && (
          <View style={styles.itemsCounter}>
            <Text style={styles.counter}>
              {itemsCounter > 9 ? "+9" : itemsCounter}
            </Text>
          </View>
        )}
        <Feather
          style={styles.cartIcon}
          name="shopping-bag"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#555",
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    gap: 10,
    paddingVertical: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontFamily: "Inter_700Bold",
  },
  image: {
    height: 15,
    width: 120,
  },
  cartIcon: {
    position: "relative",
    margin: 10,
  },
  itemsCounter: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    width: 15,
    height: 15,
    backgroundColor: "#C3FF53",
    borderRadius: 100,
  },
  cart: {
    flexDirection: "column",
    alignItems: "center",
  },
  counter: {
    color: "#000",
    fontSize: 10,
    fontFamily: "Inter_700Bold",
  },
});
