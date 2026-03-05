import { View, Text } from 'react-native';
import { colors } from '../../../../src/constants/colors';

export default function AccountSettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text }}>AccountSettings</Text>
    </View>
  );
}
