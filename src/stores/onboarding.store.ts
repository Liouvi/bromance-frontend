import { create } from 'zustand';
import type { AccountType } from '../types/profile.types';

interface OnboardingState {
  accountType: AccountType | null;
  phone: string;
  setAccountType: (type: AccountType) => void;
  setPhone: (phone: string) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  accountType: null,
  phone: '',
  setAccountType: (accountType) => set({ accountType }),
  setPhone: (phone) => set({ phone }),
  reset: () => set({ accountType: null, phone: '' }),
}));
