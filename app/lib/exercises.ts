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
  },
  {
    title: "Stacked Cards",
    description: "Cards stacked with transform effects using CSS custom properties",
    courseUrl: "https://example.com/css-animations-course",
    topic: "CSS Animations",
    slug: "stacked-cards"
  },
  {
    title: "Hover Circle",
    description: "Circle that moves up on hover with smooth transition",
    courseUrl: "https://example.com/css-animations-course",
    topic: "CSS Animations",
    slug: "hover-circle"
  },
  {
    title: "Card Hover",
    description: "Card with sliding description panel on hover",
    courseUrl: "https://example.com/css-animations-course",
    topic: "CSS Animations",
    slug: "card-hover"
  },
  {
    title: "Download Arrow",
    description: "Button with animated arrow transition on hover",
    courseUrl: "https://example.com/css-animations-course",
    topic: "CSS Animations",
    slug: "download-arrow"
  },
  {
    title: "Toast Component",
    description: "Interactive toast notification system with stacking animations",
    courseUrl: "https://example.com/css-animations-course",
    topic: "CSS Animations",
    slug: "toast-component"
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