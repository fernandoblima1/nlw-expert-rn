import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  StyleSheet,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => (
    <TouchableOpacity
      ref={ref}
      {...rest}
      activeOpacity={0.5}
      style={styles.product}
    >
      <Image style={styles.image} source={data.thumbnail} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <View style={styles.infos}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        {data.quantity && <Text style={styles.quantity}>x{data.quantity}</Text>}
      </View>
    </TouchableOpacity>
  )
);

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  infos: {
    flex: 1,
    alignSelf: "center",
    marginLeft: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
    fontSize: 20,
    marginBottom: 5,
  },
  price: {
    color: "#C3FF53",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
  quantity: {
    color: "#C3FF53",
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  description: {
    color: "#94A3B8",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});
