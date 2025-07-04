// _layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
     <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}