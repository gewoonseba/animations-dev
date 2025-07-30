import { Orbit } from '@/app/exercises/orbit/component';
import { ExerciseDetail } from '@/components/exercise-detail';

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
