import { ToastComponentComponent } from "./component";
import { ExerciseDisplay } from "../ExerciseDisplay";

export default function ToastComponentPage() {
  return (
    <ExerciseDisplay
      title="Transitions - Toast Component"
      description="A toast notification system with stacking animations and smooth transitions"
      courseUrl="https://animations.dev/learn/css-animations/transitions"
    >
      <ToastComponentComponent />
    </ExerciseDisplay>
  );
}