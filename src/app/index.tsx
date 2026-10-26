import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HelloWorldScreen() {
  const [showHelloWorld, setShowHelloWorld] = useState(false);

  const toggleHelloWorld = () => {
    setShowHelloWorld((prev) => !prev);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Hello World App
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.sectionContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            1. Toggle Hello World
          </ThemedText>

          <Button
            title={showHelloWorld ? "Sembunyikan" : "Tampilkan"}
            onPress={toggleHelloWorld}
          />

          {showHelloWorld && (
            <ThemedText type="defaultSemiBold" style={styles.helloText}>
              Hello World
            </ThemedText>
          )}
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.two,
    paddingBottom: BottomTabInset + Spacing.two,
    maxWidth: MaxContentWidth,
    alignSelf: "center",
    width: "100%",
    gap: Spacing.three,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Spacing.one,
    gap: Spacing.one,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  sectionContainer: {
    gap: Spacing.two,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.four,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  helloText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: Spacing.two,
  },
});
