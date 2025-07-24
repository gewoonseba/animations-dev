import { ExerciseDisplay } from "@/app/components/ExerciseDisplay";
import { CoinSpinComponent } from "@/app/exercises/coin-spin/component";

export default function CoinSpinPage() {
  return (
    <ExerciseDisplay
      courseUrl="https://animations.dev/learn/css-animations/keyframe-animations"
      description="Coin rotating in 3D space"
      title="Coin Spin"
    >
      <CoinSpinComponent />
    </ExerciseDisplay>
  );
}
