export interface ExerciseMetadata {
  title: string;
  description: string;
  courseUrl: string;
  topic: string;
  slug: string;
}

// Import all metadata modules explicitly
const metadataImports = {
  "card-hover": () => import("../exercises/card-hover/metadata"),
  "download-arrow": () => import("../exercises/download-arrow/metadata"),
  "hover-circle": () => import("../exercises/hover-circle/metadata"),
  "stacked-cards": () => import("../exercises/stacked-cards/metadata"),
  "toast-component-starting-styles": () =>
    import("../exercises/toast-component-starting-styles/metadata"),
};

// Cache for loaded exercises
let exercisesCache: ExerciseMetadata[] | null = null;

async function loadExercises(): Promise<ExerciseMetadata[]> {
  if (exercisesCache) {
    return exercisesCache;
  }

  const exercises = await Promise.all(
    Object.entries(metadataImports).map(async ([slug, importFn]) => {
      const metadataModule = await importFn();
      return metadataModule.metadata;
    })
  );

  exercisesCache = exercises;
  return exercises;
}

export async function getExercises(): Promise<ExerciseMetadata[]> {
  return loadExercises();
}

export async function getExerciseBySlug(
  slug: string
): Promise<ExerciseMetadata | undefined> {
  const exercises = await loadExercises();
  return exercises.find((exercise) => exercise.slug === slug);
}

export async function getExercisesByTopic(): Promise<
  Record<string, ExerciseMetadata[]>
> {
  const exercises = await loadExercises();
  const grouped: Record<string, ExerciseMetadata[]> = {};

  exercises.forEach((exercise) => {
    if (!grouped[exercise.topic]) {
      grouped[exercise.topic] = [];
    }
    grouped[exercise.topic].push(exercise);
  });

  return grouped;
}
