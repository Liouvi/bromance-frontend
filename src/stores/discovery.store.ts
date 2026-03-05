import { create } from 'zustand';
import type { Profile } from '../types/profile.types';

interface DiscoveryState {
  cards: Profile[];
  currentIndex: number;
  setCards: (cards: Profile[]) => void;
  advance: () => void;
}

export const useDiscoveryStore = create<DiscoveryState>((set) => ({
  cards: [],
  currentIndex: 0,
  setCards: (cards) => set({ cards, currentIndex: 0 }),
  advance: () => set((s) => ({ currentIndex: s.currentIndex + 1 })),
}));
