export interface TrainingType {
  id: string;
  label: string;
  animationKey: string;
}

export const TRAINING_TYPES: TrainingType[] = [
  { id: 'powerlifting', label: 'Powerlifting', animationKey: 'match-powerlifting' },
  { id: 'bodybuilding', label: 'Bodybuilding', animationKey: 'match-bodybuilding' },
  { id: 'crossfit', label: 'CrossFit', animationKey: 'match-crossfit' },
  { id: 'cardio', label: 'Cardio', animationKey: 'match-cardio' },
  { id: 'martial-arts', label: 'Martial Arts', animationKey: 'match-martial-arts' },
  { id: 'yoga', label: 'Yoga', animationKey: 'match-yoga' },
  { id: 'casual', label: 'Casual', animationKey: 'match-casual' },
];

export const TRAINING_TYPE_IDS = TRAINING_TYPES.map((t) => t.id);
