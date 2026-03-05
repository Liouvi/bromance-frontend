import type { Inquiry } from '../types/inquiry.types';

export function useInquiries(): { inquiries: Inquiry[]; isLoading: boolean } {
  return { inquiries: [], isLoading: false };
}
