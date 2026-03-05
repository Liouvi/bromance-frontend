import type { Message } from '../types/match.types';

export function useChat(_threadId: string): { messages: Message[]; isLoading: boolean } {
  return { messages: [], isLoading: false };
}
