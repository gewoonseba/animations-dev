import { ExerciseDetail } from '../../components/exercise-detail';
import { AnimatingHeightComponent } from './component';

export default function AnimatingHeightPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/how-do-i-use-framer-motion/the-basics"
      description="A drawer that demonstrates height animation with Framer Motion"
      title="Animating Height"
    >
      <AnimatingHeightComponent />
    </ExerciseDetail>
  );
}
