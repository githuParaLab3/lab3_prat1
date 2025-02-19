import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Link } from "expo-router";

export default function index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type="title">Jogar</ThemedText>
      
      <ThemedText type="link">
        <Link href="/facil">Fácil</Link>
      </ThemedText>
      <ThemedText type="link">
        <Link href="/intermediario">Intermediário</Link>
      </ThemedText>
      <ThemedText type="link">
        <Link href="/dificil">Dificil</Link>
      </ThemedText>
    </ThemedView>
  );
}
