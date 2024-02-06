import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
