import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { Text, Pressable, PressableProps, StyleSheet } from "react-native";

type CategoryButtonProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export const CategoryButton = ({
  title,
  isSelected,
  ...rest
}: CategoryButtonProps) => {
  return (
    <Pressable {...rest} style={styles.category}>
      <Text
        style={[
          styles.text,
          isSelected
            ? { fontFamily: "Inter_600SemiBold" }
            : { fontFamily: "Inter_400Regular" },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#010111",
    borderColor: "#C3FF53",
    borderWidth: 0.5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
