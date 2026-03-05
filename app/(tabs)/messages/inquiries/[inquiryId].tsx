import { View, Text } from 'react-native';
import { colors } from '../../../../src/constants/colors';

export default function InquiryDetailScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text }}>InquiryDetail</Text>
    </View>
  );
}
