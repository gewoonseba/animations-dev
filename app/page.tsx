import Link from "next/link";
import { getExercisesByLayout } from "./lib/exercises";

export default async function Home() {
  const exerciseSections = await getExercisesByLayout();

  return (
    <div className="mx-20 mt-16 max-w-screen-lg">
      <h1 className="text-sm text-black mb-24">Animations.dev</h1>

      {exerciseSections.map((section) => (
        <div key={section.title} className="mb-24">
          <h2 className="text-sm text-black mb-2">{section.title}</h2>

          <ul className="list-none p-0">
            {section.exercises.map((exercise) => (
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
