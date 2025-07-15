import Link from "next/link";
import { getExercises } from "./lib/exercises";

export default async function Home() {
  const allExercises = await getExercises();
  
  // Create a map for quick lookup
  const exerciseMap = new Map(allExercises.map(ex => [ex.slug, ex]));
  
  // Define your exercise layout directly here - full control!
  const exerciseSections = [
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

  return (
    <div className="mx-20 mt-16 max-w-screen-lg">
      <h1 className="text-sm text-black mb-24">Animations.dev</h1>

      {exerciseSections.map((section) => (
        <div key={section.title} className="mb-24">
          <h2 className="text-sm text-black mb-2">{section.title}</h2>

          <ul className="list-none p-0">
            {section.exercises
              .map(slug => exerciseMap.get(slug))
              .filter(exercise => exercise !== undefined)
              .map((exercise) => (
                <li key={exercise.slug} className="mb-1">
                  <Link
                    href={`/exercises/${exercise.slug}`}
                    className="text-sm text-neutral-500 hover:underline decoration-solid underline-offset-auto"
                  >
                    {exercise.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
