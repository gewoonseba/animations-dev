import { CoinSpinComponent } from '@/app/exercises/coin-spin/component';
import { ExerciseDetail } from '@/components/exercise-detail';

export default function CoinSpinPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/keyframe-animations"
      description="Coin rotating in 3D space"
      title="Coin Spin"
    >
      <CoinSpinComponent />
    </ExerciseDetail>
  );
}
