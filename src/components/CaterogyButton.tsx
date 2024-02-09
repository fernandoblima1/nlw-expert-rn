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
    <Pressable
      {...rest}
      style={[
        styles.category,
        isSelected && { borderColor: "#C3FF53", borderWidth: 1 },
      ]}
    >
      <Text style={[styles.text]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#010111",
    height: 40,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
});
