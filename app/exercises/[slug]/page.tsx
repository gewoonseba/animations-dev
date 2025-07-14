import Link from "next/link";
import { notFound } from "next/navigation";
import { getExerciseBySlug } from "../../lib/exercises";
import { BouncingBallComponent } from "../bouncing-ball/component";
import { LoadingSpinnerComponent } from "../loading-spinner/component";
import { StackedCardsComponent } from "../stacked-cards/component";
import { HoverCircleComponent } from "../hover-circle/component";
import { CardHoverComponent } from "../card-hover/component";
import { DownloadArrowComponent } from "../download-arrow/component";
import { ToastComponentComponent } from "../toast-component/component";

const exerciseComponents = {
  "bouncing-ball": BouncingBallComponent,
  "loading-spinner": LoadingSpinnerComponent,
  "stacked-cards": StackedCardsComponent,
  "hover-circle": HoverCircleComponent,
  "card-hover": CardHoverComponent,
  "download-arrow": DownloadArrowComponent,
  "toast-component": ToastComponentComponent,
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

  const ExerciseComponent =
    exerciseComponents[slug as keyof typeof exerciseComponents];

  if (!ExerciseComponent) {
    notFound();
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-neutral-500 no-underline hover:text-neutral-800 text-sm"
      >
        ← Back to exercises
      </Link>

      <h1 className="mt-8 mb-2 text-sm font-semibold text-neutral-900">
        {exercise.title}
      </h1>

      <p className="mb-4 text-sm text-neutral-600">{exercise.description}</p>

      <a
        href={exercise.courseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 no-underline hover:text-neutral-800 text-sm"
      >
        View course material →
      </a>

      <div className="mt-8 p-8 border border-neutral-100 rounded-lg flex justify-center items-center w-full h-96">
        <ExerciseComponent />
      </div>
    </div>
  );
}
