import { ClipPathButton } from '@/app/exercises/hold-to-delete/component';
import { ExerciseDetail } from '@/components/exercise-detail';

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
