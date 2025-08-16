import { ExerciseDetail } from '../../../components/exercise-detail';
import { MultiStepComponent } from './component';

export default function MultiStepComponentPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/how-do-i-use-framer-motion/multi-step-component"
      description="A multi-step component layout with content changes and disabled buttons at edges"
      title="Multi-step Component"
    >
      <MultiStepComponent />
    </ExerciseDetail>
  );
}
