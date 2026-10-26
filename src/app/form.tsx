import { useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function FormScreen() {
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(inputText);
    Keyboard.dismiss();
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Form Input App
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.sectionContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            2. Form Input Text
          </ThemedText>

          <TextInput
            style={styles.input}
            placeholder="Ketik sesuatu di sini..."
            placeholderTextColor="#888"
            value={inputText}
            onChangeText={setInputText}
          />

          <Button title="Submit" onPress={handleSubmit} color="#10b981" />

          {submittedText !== "" && (
            <View style={styles.resultBox}>
              <ThemedText type="small" style={styles.resultLabel}>
                Hasil Input:
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.resultText}>
                {submittedText}
              </ThemedText>
            </View>
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
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
  },
  resultBox: {
    marginTop: Spacing.two,
    padding: Spacing.two,
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    borderRadius: 8,
  },
  resultLabel: {
    opacity: 0.7,
  },
  resultText: {
    fontSize: 16,
    marginTop: 2,
  },
});
