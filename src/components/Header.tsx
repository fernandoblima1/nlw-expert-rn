import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";
type HeaderProps = {
  title: string;
  cardQuantityItems?: number | undefined;
  backButton?: boolean | false;
};

export const Header = ({
  title,
  cardQuantityItems,
  backButton,
}: HeaderProps) => {
  const [itemsCounter, setItemsCounter] = useState(cardQuantityItems || 0);
  const history = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/logo.png")}
        />
        <View style={styles.titleHeader}>
          {backButton && (
            <TouchableOpacity
              onPress={() => {
                history.goBack();
              }}
            >
              <Feather
                name="chevron-left"
                size={24}
                style={{ marginRight: 10 }}
                color="white"
              />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      {cardQuantityItems! > 0 && (
        <Link href={"/card"} asChild>
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
        </Link>
      )}
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
  titleHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});
