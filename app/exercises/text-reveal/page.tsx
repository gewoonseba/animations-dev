import { ExerciseDisplay } from '../../components/ExerciseDisplay';
import { TextReveal } from './component';

export default function TextRevealPage() {
  return (
    <ExerciseDisplay
      courseUrl="https://animations.dev/learn/css-animations/keyframe-animations"
      description="A text reveal animation using keyframes"
      title="Text Reveal"
    >
      <TextReveal />
    </ExerciseDisplay>
  );
}
