import { ExerciseDetail } from '../../../components/exercise-detail';
import { ToastComponentStartingStylesComponent } from './component';

export default function ToastComponentPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/transitions"
      description="A toast notification system with stacking animations and smooth transitions"
      title="Toast Component"
    >
      <ToastComponentStartingStylesComponent />
    </ExerciseDetail>
  );
}
