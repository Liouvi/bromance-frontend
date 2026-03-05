import { useProfileStore } from '../stores/profile.store';

export function useProfile() {
  return useProfileStore();
}
