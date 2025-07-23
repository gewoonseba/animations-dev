import { ExerciseDisplay } from '../../components/ExerciseDisplay';
import { HoverCircleComponent } from './component';

export default function HoverCirclePage() {
  return (
    <ExerciseDisplay
      courseUrl="https://animations.dev/learn/css-animations/transitions"
      description="A circle that moves up when hovered using CSS transitions"
      title="Hover Circle"
    >
      <HoverCircleComponent />
    </ExerciseDisplay>
  );
}
