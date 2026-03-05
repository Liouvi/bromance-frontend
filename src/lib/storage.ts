import * as SecureStore from 'expo-secure-store';

export async function getToken(key: string): Promise<string | null> {
  return SecureStore.getItemAsync(key);
}

export async function setToken(key: string, value: string): Promise<void> {
  return SecureStore.setItemAsync(key, value);
}

export async function clearTokens(): Promise<void> {
  await SecureStore.deleteItemAsync('access_token');
  await SecureStore.deleteItemAsync('refresh_token');
}
