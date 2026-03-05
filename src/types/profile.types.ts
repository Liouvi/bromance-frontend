export type AccountType = 'buddy' | 'coach';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';
export type TrainingFormat = 'in-person' | 'online' | 'both';
export type TimeOfDay = 'morning' | 'midday' | 'evening';
export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface Gym {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export interface Schedule {
  days: DayOfWeek[];
  times: TimeOfDay[];
}

export interface PRWall {
  deadlift?: number;
  squat?: number;
  bench?: number;
  custom?: { label: string; value: number }[];
}

export interface Profile {
  id: string;
  user_id: string;
  account_type: AccountType;
  name: string;
  age: number;
  gender: string;
  bio: string | null;
  photos: string[];
  training_types: string[];
  experience_level: ExperienceLevel;
  schedule: Schedule;
  gym: Gym | null;
  pr_wall: PRWall | null;
  current_program: string | null;
  streak_weeks: number;
  on_deload: boolean;
  profile_complete: boolean;
  distance_km?: number;
}

export interface CoachProfile {
  id: string;
  user_id: string;
  name: string;
  bio: string;
  headshot: string | null;
  credentials: string[];
  specializations: string[];
  format: TrainingFormat;
  rate_per_session: number;
  availability_note: string | null;
  accepting_inquiries: boolean;
  verified: boolean;
}

export interface UserPreferences {
  gender_filter: string | null;
  max_distance_km: number;
  training_types: string[];
}
