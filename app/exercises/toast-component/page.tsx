import { ExerciseDisplay } from '../../components/ExerciseDisplay';
import { ToastComponentComponent } from './component';

export default function ToastComponentPage() {
  return (
    <ExerciseDisplay
      courseUrl="https://animations.dev/learn/css-animations/transitions"
      description="A toast notification system with stacking animations and smooth transitions"
      title="Toast Component"
    >
      <ToastComponentComponent />
    </ExerciseDisplay>
  );
}
