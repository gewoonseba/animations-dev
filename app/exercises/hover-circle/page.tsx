import { ExerciseDetail } from "../../components/ExerciseDetail";
import { HoverCircleComponent } from "./component";

export default function HoverCirclePage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/transitions"
      description="A circle that moves up when hovered using CSS transitions"
      title="Hover Circle"
    >
      <HoverCircleComponent />
    </ExerciseDetail>
  );
}
