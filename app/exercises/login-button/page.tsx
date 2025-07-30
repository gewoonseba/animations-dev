import { ExerciseDetail } from '../../../components/exercise-detail';
import { LoginButtonComponent } from './component';

export default function LoginButtonPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/how-do-i-use-framer-motion/the-basics"
      description="A simple login button animation exercise"
      title="Login Button"
    >
      <LoginButtonComponent />
    </ExerciseDetail>
  );
}
