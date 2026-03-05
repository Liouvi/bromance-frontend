import { StyleSheet, Text, View } from 'react-native';

import { Member } from '../../types/profile.types';

export function BuddyCard({ member }: { member: Member }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.age}>{member.age}</Text>
      </View>
      <Text style={styles.gym}>📍 {member.gym}</Text>
      {member.bio
        ? <Text style={styles.bio}>{member.bio}</Text>
        : <Text style={styles.bioEmpty}>No bio yet</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#E63946',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  age: {
    fontSize: 16,
    color: '#E63946',
    fontWeight: '600',
  },
  gym: {
    fontSize: 13,
    color: '#a8dadc',
    marginBottom: 8,
  },
  bio: {
    fontSize: 13,
    color: '#cccccc',
    lineHeight: 20,
  },
  bioEmpty: {
    fontSize: 13,
    color: '#555577',
    fontStyle: 'italic',
  },
});
