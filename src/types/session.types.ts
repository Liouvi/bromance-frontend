export type SessionStatus = 'proposed' | 'confirmed' | 'cancelled';

export interface Session {
  id: string;
  thread_id: string;
  thread_type: 'match' | 'coaching';
  proposer_id: string;
  scheduled_at: string;
  gym_id: number | null;
  gym_name: string | null;
  note: string | null;
  status: SessionStatus;
  reminder_sent: boolean;
  created_at: string;
}
