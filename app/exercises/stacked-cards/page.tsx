import { ExerciseDisplay } from "../../components/ExerciseDisplay";
import { StackedCardsComponent } from "./component";

export default function StackedCardsPage() {
  return (
    <ExerciseDisplay
      title="tacked Cards"
      description="Cards stacked on top of each other using CSS transforms and grid layout"
      courseUrl="https://animations.dev/learn/css-animations/transforms"
    >
      <StackedCardsComponent />
    </ExerciseDisplay>
  );
}
