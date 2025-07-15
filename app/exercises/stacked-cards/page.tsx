import { StackedCardsComponent } from "./component";
import { ExerciseDisplay } from "../ExerciseDisplay";

export default function StackedCardsPage() {
  return (
    <ExerciseDisplay
      title="Transforms - Stacked Cards"
      description="Cards stacked on top of each other using CSS transforms and grid layout"
      courseUrl="https://animations.dev/learn/css-animations/transforms"
    >
      <StackedCardsComponent />
    </ExerciseDisplay>
  );
}