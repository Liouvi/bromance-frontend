export type SubscriptionTier = 'free' | 'pro';

export interface Subscription {
  tier: SubscriptionTier;
  expires_at: string | null;
  product_id: string | null;
}

export interface Entitlements {
  unlimited_likes: boolean;
  unlimited_inquiries: boolean;
  see_who_liked_you: boolean;
}
