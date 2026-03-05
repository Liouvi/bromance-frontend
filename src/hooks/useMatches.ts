import type { Match } from '../types/match.types';

export function useMatches(): { matches: Match[]; isLoading: boolean } {
  return { matches: [], isLoading: false };
}
