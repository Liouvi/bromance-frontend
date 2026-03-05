import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '../src/stores/auth.store';
import { colors } from '../src/constants/colors';

export default function Index() {
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    if (user) {
      router.replace('/(tabs)/discover');
    } else {
      router.replace('/onboarding/welcome');
    }
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <ActivityIndicator size="large" color={colors.accent} />
    </View>
  );
}
