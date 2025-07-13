import Link from "next/link";
import { getExercisesByTopic } from "./lib/exercises";

export default function Home() {
  const exercisesByTopic = getExercisesByTopic();

  return (
    <div style={{ marginLeft: "80px", marginTop: "67px" }}>
      <h1 style={{ 
        fontFamily: "var(--font-inter)", 
        fontWeight: "500", 
        fontSize: "13px", 
        color: "#000000",
        marginBottom: "99px"
      }}>
        Animations.dev
      </h1>
      
      {Object.entries(exercisesByTopic).map(([topic, exercises]) => (
        <div key={topic} style={{ marginBottom: "121px" }}>
          <h2 style={{ 
            fontFamily: "var(--font-inter)", 
            fontWeight: "500", 
            fontSize: "13px", 
            color: "#000000",
            marginBottom: "22px"
          }}>
            {topic}
          </h2>
          
          <ul style={{ listStyle: "none", padding: 0 }}>
            {exercises.map((exercise) => (
              <li key={exercise.slug} style={{ 
                marginBottom: "22px"
              }}>
                <Link 
                  href={`/exercises/${exercise.slug}`}
                  style={{ 
                    fontFamily: "var(--font-inter)", 
                    fontWeight: "400", 
                    fontSize: "13px", 
                    color: "#777676",
                    textDecoration: "underline",
                    textDecorationStyle: "solid",
                    textUnderlinePosition: "from-font"
                  }}
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
