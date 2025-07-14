export interface ExerciseMetadata {
  title: string;
  description: string;
  courseUrl: string;
  topic: string;
  slug: string;
}

// Simple list of exercise slugs - add new exercises here
const exerciseSlugs = [
  "bouncing-ball",
  "loading-spinner", 
  "stacked-cards",
  "hover-circle",
  "card-hover",
  "download-arrow",
  "toast-component"
];

// Cache for loaded exercises
let exercisesCache: ExerciseMetadata[] | null = null;

async function loadExercises(): Promise<ExerciseMetadata[]> {
  if (exercisesCache) {
    return exercisesCache;
  }

  const exercises = await Promise.all(
    exerciseSlugs.map(async (slug) => {
      const metadataModule = await import(`../exercises/${slug}/metadata`);
      return metadataModule.metadata;
    })
  );

  exercisesCache = exercises;
  return exercises;
}

export async function getExercises(): Promise<ExerciseMetadata[]> {
  return loadExercises();
}

export async function getExerciseBySlug(slug: string): Promise<ExerciseMetadata | undefined> {
  const exercises = await loadExercises();
  return exercises.find(exercise => exercise.slug === slug);
}

export async function getExercisesByTopic(): Promise<Record<string, ExerciseMetadata[]>> {
  const exercises = await loadExercises();
  const grouped: Record<string, ExerciseMetadata[]> = {};
  
  exercises.forEach(exercise => {
    if (!grouped[exercise.topic]) {
      grouped[exercise.topic] = [];
    }
    grouped[exercise.topic].push(exercise);
  });
  
  return grouped;
}