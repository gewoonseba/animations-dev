import Link from "next/link";
import { getExercisesByTopic } from "./lib/exercises";

export default function Home() {
  const exercisesByTopic = getExercisesByTopic();

  return (
    <div className="mx-20 mt-16 max-w-screen-lg">
      <h1 className="text-sm text-black mb-24">Animations.dev</h1>

      {Object.entries(exercisesByTopic).map(([topic, exercises]) => (
        <div key={topic} className="mb-24">
          <h2 className="text-sm text-black mb-2">{topic}</h2>

          <ul className="list-none p-0">
            {exercises.map((exercise) => (
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
