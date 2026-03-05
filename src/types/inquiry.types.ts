export type InquiryStatus = 'pending' | 'accepted' | 'declined' | 'countered' | 'withdrawn';

export interface Inquiry {
  id: string;
  buddy_id: string;
  coach_id: string;
  status: InquiryStatus;
  goals: string;
  sessions_per_week: number;
  format_preference: string;
  notes: string | null;
  coach_response: string | null;
  counter_rate: number | null;
  counter_format: string | null;
  created_at: string;
  updated_at: string;
}

export interface CoachingThread {
  id: string;
  inquiry_id: string;
  buddy_id: string;
  coach_id: string;
  partner_name: string;
  partner_photo: string | null;
  last_message: string | null;
  last_message_at: string | null;
  unread_count: number;
  ended_at: string | null;
}
