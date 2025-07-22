import { ExerciseDisplay } from "../../components/ExerciseDisplay";
import { CardHoverComponent } from "./component";

export default function CardHoverPage() {
  return (
    <ExerciseDisplay
      title="Card Hover"
      description="A card with a description that slides up on hover using smooth transitions"
      courseUrl="https://animations.dev/learn/css-animations/transitions"
    >
      <CardHoverComponent />
    </ExerciseDisplay>
  );
}
