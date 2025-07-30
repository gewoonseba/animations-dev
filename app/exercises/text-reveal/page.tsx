import { ExerciseDetail } from '../../components/exercise-detail';
import { TextReveal } from './component';

export default function TextRevealPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/keyframe-animations"
      description="A text reveal animation using keyframes"
      title="Text Reveal"
    >
      <TextReveal />
    </ExerciseDetail>
  );
}
