export interface Match {
  id: string;
  partner_id: string;
  partner_name: string;
  partner_photo: string | null;
  last_message: string | null;
  last_message_at: string | null;
  unread_count: number;
  matched_at: string;
}

export interface Message {
  id: string;
  thread_id: string;
  thread_type: 'match' | 'coaching';
  sender_id: string;
  body: string;
  read_at: string | null;
  created_at: string;
}

export interface Thread {
  id: string;
  type: 'match' | 'coaching';
  partner_id: string;
  partner_name: string;
  partner_photo: string | null;
  last_message: string | null;
  last_message_at: string | null;
  unread_count: number;
}
