import { CardHoverComponent } from "./component";
import { ExerciseDisplay } from "../ExerciseDisplay";

export default function CardHoverPage() {
  return (
    <ExerciseDisplay
      title="Transitions - Card Hover"
      description="A card with a description that slides up on hover using smooth transitions"
      courseUrl="https://animations.dev/learn/css-animations/transitions"
    >
      <CardHoverComponent />
    </ExerciseDisplay>
  );
}