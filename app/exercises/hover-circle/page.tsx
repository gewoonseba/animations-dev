import { HoverCircleComponent } from "./component";
import { ExerciseDisplay } from "../ExerciseDisplay";

export default function HoverCirclePage() {
  return (
    <ExerciseDisplay
      title="Transitions - Hover Circle"
      description="A circle that moves up when hovered using CSS transitions"
      courseUrl="https://animations.dev/learn/css-animations/transitions"
    >
      <HoverCircleComponent />
    </ExerciseDisplay>
  );
}