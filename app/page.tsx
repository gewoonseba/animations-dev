import Link from "next/link";
import { getExercisesByTopic } from "./lib/exercises";

export default function Home() {
  const exercisesByTopic = getExercisesByTopic();

  return (
    <div className="ml-20 mt-16">
      <h1 className="font-medium text-sm text-black mb-24">
        Animations.dev
      </h1>
      
      {Object.entries(exercisesByTopic).map(([topic, exercises]) => (
        <div key={topic} className="mb-24">
          <h2 className="font-medium text-sm text-black mb-6">
            {topic}
          </h2>
          
          <ul className="list-none p-0">
            {exercises.map((exercise) => (
              <li key={exercise.slug} className="mb-6">
                <Link 
                  href={`/exercises/${exercise.slug}`}
                  className="font-normal text-sm text-gray-500 underline decoration-solid underline-offset-auto"
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
