import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

type ButtonTextProps = {
  children: ReactNode;
};

type ButtonIconProps = {
  children: ReactNode;
};

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} {...rest} style={styles.button}>
      {children}
    </TouchableOpacity>
  );
}

function ButtonText({ children }: ButtonTextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

function ButtonIcon({ children }: ButtonIconProps) {
  return <>{children}</>;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#C3FF53",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    color: "#0F172A",
    fontFamily: "Inter_600SemiBold",
    paddingHorizontal: 10,
  },
});
