import { Link, LinkProps } from "expo-router";
import { StyleSheet, View } from "react-native";

type LinkButtonProps = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <View style={styles.container}>
      <Link {...rest} style={styles.text}>
        {title}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Inter_600SemiBold",
    paddingHorizontal: 10,
  },
});
