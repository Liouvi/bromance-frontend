import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { BuddyCard } from './src/components/cards/BuddyCard';
import { Member } from './src/types/profile.types';

// IMPORTANT: change this to your computer's local IP (run `ipconfig` to find it).
// - Physical phone via Expo Go → use your IPv4 address, e.g. 'http://192.168.1.x:5000'
// - Android Emulator → use 'http://10.0.2.2:5000'
// - Expo web (browser) → 'http://localhost:5000' works fine
const API_URL = 'http://10.0.2.2:5000';

export default function App() {

  // useState gives a component "memory" between renders.
  // Calling the setter triggers a re-render with the new value.
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  // useEffect runs side effects — things outside of rendering, like fetching data.
  // The [] means "run once, when this component first appears on screen."
  // Without [], it would re-run every render → infinite loop.
  useEffect(() => {
    // We define async inside useEffect because the callback itself can't be async.
    async function fetchMembers() {
      try {
        // fetch() makes an HTTP GET request. Returns a Promise.
        const response = await fetch(`${API_URL}/api/members`);

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        // response.json() parses the JSON body. Also a Promise.
        const data: Member[] = await response.json();

        // Update state → React re-renders → list appears.
        setMembers(data);

      } catch (err) {
        setError('Could not load gym buddies. Is the server running?');
        console.error(err);
      } finally {
        // Runs whether fetch succeeded or failed — always stop the spinner.
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  // Conditional rendering: show different UI depending on state.
  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#E63946" />
        <Text style={styles.loadingText}>Finding gym buddies...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>BROMANCE</Text>
        <Text style={styles.headerSubtitle}>Find your gym buddy</Text>
      </View>

      {/* FlatList renders only the items visible on screen (virtualization).
          Much more efficient than .map() for long lists.
          keyExtractor gives each item a unique string key so React can update efficiently. */}
      <FlatList
        data={members}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BuddyCard member={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No gym buddies found yet!</Text>
        }
      />
    </SafeAreaView>
  );
}

// Styles look like CSS but use camelCase and numbers (no 'px').
// StyleSheet.create() compiles them to an optimized native format.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  centered: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#E63946',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 3,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#ffcccc',
    marginTop: 4,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  loadingText: {
    color: '#cccccc',
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    color: '#E63946',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    color: '#cccccc',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
