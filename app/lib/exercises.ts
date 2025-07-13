export interface ExerciseMetadata {
  title: string;
  description: string;
  courseUrl: string;
  topic: string;
  slug: string;
}

export const exercises: ExerciseMetadata[] = [
  {
    title: "Bouncing Ball",
    description: "A simple ball that bounces up and down using CSS keyframes",
    courseUrl: "https://example.com/css-animations-course",
    topic: "CSS Animations",
    slug: "bouncing-ball"
  },
  {
    title: "Loading Spinner",
    description: "A rotating circle loading animation with CSS transforms",
    courseUrl: "https://example.com/css-animations-course",
    topic: "CSS Animations",
    slug: "loading-spinner"
  }
];

export function getExerciseBySlug(slug: string): ExerciseMetadata | undefined {
  return exercises.find(exercise => exercise.slug === slug);
}

export function getExercisesByTopic(): Record<string, ExerciseMetadata[]> {
  const grouped: Record<string, ExerciseMetadata[]> = {};
  
  exercises.forEach(exercise => {
    if (!grouped[exercise.topic]) {
      grouped[exercise.topic] = [];
    }
    grouped[exercise.topic].push(exercise);
  });
  
  return grouped;
}