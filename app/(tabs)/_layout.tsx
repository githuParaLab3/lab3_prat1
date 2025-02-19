import { Tabs } from 'expo-router';
export default function TabLayout() {
return (
<Tabs>
<Tabs.Screen name="(jogar)" options={{headerShown: false }} />
<Tabs.Screen name="recomecar" options={{headerShown: false }} />
<Tabs.Screen name="ranking" options={{headerShown: false }} />
</Tabs>
);
}