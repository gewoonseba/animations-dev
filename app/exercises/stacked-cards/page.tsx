import { ExerciseDisplay } from '../../components/ExerciseDisplay';
import { StackedCardsComponent } from './component';

export default function StackedCardsPage() {
  return (
    <ExerciseDisplay
      courseUrl="https://animations.dev/learn/css-animations/transforms"
      description="Cards stacked on top of each other using CSS transforms and grid layout"
      title="Stacked Cards"
    >
      <StackedCardsComponent />
    </ExerciseDisplay>
  );
}
