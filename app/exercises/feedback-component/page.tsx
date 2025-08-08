import { ExerciseDetail } from '../../../components/exercise-detail';
import { FeedbackComponent } from './component';

export default function FeedbackComponentPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/how-do-i-use-framer-motion/feedback-popover"
      description="A feedback popover with keyboard shortcuts, loading state, and success confirmation"
      title="Feedback Component"
    >
      <FeedbackComponent />
    </ExerciseDetail>
  );
}
