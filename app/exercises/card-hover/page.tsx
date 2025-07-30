import { ExerciseDetail } from '../../components/exercise-detail';
import { CardHoverComponent } from './component';

export default function CardHoverPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/transitions"
      description="A card with a description that slides up on hover using smooth transitions"
      title="Card Hover"
    >
      <CardHoverComponent />
    </ExerciseDetail>
  );
}
