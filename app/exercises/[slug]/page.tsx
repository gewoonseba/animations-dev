import { notFound } from "next/navigation";
import Link from "next/link";
import { getExerciseBySlug } from "../../lib/exercises";
import { BouncingBallComponent } from "../bouncing-ball/component";
import { LoadingSpinnerComponent } from "../loading-spinner/component";

const exerciseComponents = {
  "bouncing-ball": BouncingBallComponent,
  "loading-spinner": LoadingSpinnerComponent,
};

interface ExercisePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  const { slug } = await params;
  const exercise = getExerciseBySlug(slug);
  
  if (!exercise) {
    notFound();
  }

  const ExerciseComponent = exerciseComponents[slug as keyof typeof exerciseComponents];

  if (!ExerciseComponent) {
    notFound();
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ color: "#0070f3", textDecoration: "none" }}>
        ← Back to exercises
      </Link>
      
      <h1 style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
        {exercise.title}
      </h1>
      
      <p style={{ marginBottom: "1rem", color: "#666" }}>
        {exercise.description}
      </p>
      
      <a 
        href={exercise.courseUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: "#0070f3", textDecoration: "none" }}
      >
        View course material →
      </a>
      
      <div style={{ 
        marginTop: "2rem", 
        padding: "2rem", 
        border: "1px solid #eee", 
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px"
      }}>
        <ExerciseComponent />
      </div>
    </div>
  );
}