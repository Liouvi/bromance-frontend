import { create } from 'zustand';
import type { AuthUser, AuthTokens } from '../types/api.types';

interface AuthState {
  user: AuthUser | null;
  tokens: AuthTokens | null;
  login: (user: AuthUser, tokens: AuthTokens) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  tokens: null,
  login: (user, tokens) => set({ user, tokens }),
  logout: () => set({ user: null, tokens: null }),
}));
