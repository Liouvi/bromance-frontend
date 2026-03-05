import { Tabs } from 'expo-router';
import { colors } from '../../src/constants/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen name="discover/index" options={{ title: 'Discover' }} />
      <Tabs.Screen name="coaches/index" options={{ title: 'Coaches' }} />
      <Tabs.Screen name="matches/index" options={{ title: 'Matches' }} />
      <Tabs.Screen name="messages/index" options={{ title: 'Messages' }} />
      <Tabs.Screen name="profile/index" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
