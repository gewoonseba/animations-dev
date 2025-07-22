import { ExerciseDisplay } from "../../components/ExerciseDisplay";
import { HoverCircleComponent } from "./component";

export default function HoverCirclePage() {
  return (
    <ExerciseDisplay
      title="Hover Circle"
      description="A circle that moves up when hovered using CSS transitions"
      courseUrl="https://animations.dev/learn/css-animations/transitions"
    >
      <HoverCircleComponent />
    </ExerciseDisplay>
  );
}
