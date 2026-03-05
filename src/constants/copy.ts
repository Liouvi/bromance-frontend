export const copy = {
  emptyStates: {
    noCards: "You've seen everyone nearby. Check back later!",
    noMatches: 'No matches yet. Keep swiping!',
    noCoaches: 'No coaches available right now.',
    noSessions: 'No sessions scheduled yet.',
  },
  iceBreakerPrompts: [
    "What's your current program?",
    'What time do you usually train?',
    "What's your current goal?",
  ],
  errors: {
    generic: 'Something went wrong. Please try again.',
    network: 'Network error. Check your connection.',
    auth: 'Session expired. Please log in again.',
  },
} as const;
