import { ExerciseDetail } from '@/components/exercise-detail';
import { StackedCardsComponent } from './component';

export default function StackedCardsPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/transforms"
      description="Cards stacked on top of each other using CSS transforms and grid layout"
      title="Stacked Cards"
    >
      <StackedCardsComponent />
    </ExerciseDetail>
  );
}
