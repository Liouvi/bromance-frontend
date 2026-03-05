import type { Subscription, Entitlements } from '../types/subscription.types';

export function useSubscription(): { subscription: Subscription | null; entitlements: Entitlements } {
  return {
    subscription: null,
    entitlements: {
      unlimited_likes: false,
      unlimited_inquiries: false,
      see_who_liked_you: false,
    },
  };
}
