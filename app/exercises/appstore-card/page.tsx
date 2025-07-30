import { ExerciseDetail } from '../../components/exercise-detail';
import { AppstoreCardComponent } from './component';

export default function AppstoreCardPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/how-do-i-use-framer-motion/how-do-i-code-animations#app-store-like-transition"
      description="An interactive card component with smooth layout animations using Framer Motion"
      title="App Store Card"
    >
      <AppstoreCardComponent />
    </ExerciseDetail>
  );
}
