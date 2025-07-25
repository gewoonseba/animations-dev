import { ExerciseDisplay } from "@/app/components/ExerciseDisplay";
import { ClipPathButton } from "@/app/exercises/hold-to-delete/component";

export default function HoldToDelete() {
  return (
    <ExerciseDisplay
      courseUrl="https://animations.dev/learn/css-animations/the-magic-of-clip-path"
      description="A button you have to hold to delete. Using clip-path"
      title="Hold to delete"
    >
      <ClipPathButton />
    </ExerciseDisplay>
  );
}
