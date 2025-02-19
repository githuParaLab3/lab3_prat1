import { Stack } from 'expo-router';
export default function StackLayout() {
return (
<Stack>
<Stack.Screen name="index" options={{headerShown: false }}/>
<Stack.Screen name="facil" />
<Stack.Screen name="intermediario" />
<Stack.Screen name="dificil" />
</Stack>
);
}