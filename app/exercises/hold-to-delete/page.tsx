import { ExerciseDetail } from "@/app/components/ExerciseDetail";
import { ClipPathButton } from "@/app/exercises/hold-to-delete/component";

export default function HoldToDelete() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/the-magic-of-clip-path"
      description="A button you have to hold to delete. Using clip-path"
      title="Hold to delete"
    >
      <ClipPathButton />
    </ExerciseDetail>
  );
}
