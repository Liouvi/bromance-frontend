import type { CoachProfile } from '../types/profile.types';

export function useCoaches(): { coaches: CoachProfile[]; isLoading: boolean } {
  return { coaches: [], isLoading: false };
}
