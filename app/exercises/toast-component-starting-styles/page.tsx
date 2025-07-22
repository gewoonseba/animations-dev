import { ExerciseDisplay } from "../../components/ExerciseDisplay";
import { ToastComponentStartingStylesComponent } from "./component";

export default function ToastComponentPage() {
  return (
    <ExerciseDisplay
      title="Toast Component"
      description="A toast notification system with stacking animations and smooth transitions"
      courseUrl="https://animations.dev/learn/css-animations/transitions"
    >
      <ToastComponentStartingStylesComponent />
    </ExerciseDisplay>
  );
}
