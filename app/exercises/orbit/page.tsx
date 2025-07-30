import { ExerciseDetail } from '@/app/components/exercise-detail';
import { Orbit } from '@/app/exercises/orbit/component';

export default function OrbitPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/keyframe-animations"
      description="One circle orbiting another with 3D transforms"
      title="Orbit"
    >
      <Orbit />
    </ExerciseDetail>
  );
}
