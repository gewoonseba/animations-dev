export interface ExerciseSection {
  title: string;
  exercises: string[]; // slugs in desired order
}

// Central configuration for exercise layout
// You have complete control over order and groupings here
export const EXERCISE_LAYOUT: ExerciseSection[] = [
  {
    title: "CSS Transitions",
    exercises: [
      "hover-circle",      // Simple hover effect - good starter
      "card-hover",        // More complex card interaction  
      "download-arrow",    // Button with animated arrows
      "toast-component"    // Advanced stacking animations
    ]
  },
  {
    title: "CSS Transforms", 
    exercises: [
      "stacked-cards"      // 3D card stacking effect
    ]
  }
];

// Helper to get all exercise slugs in order
export function getAllExerciseSlugs(): string[] {
  return EXERCISE_LAYOUT.flatMap(section => section.exercises);
}