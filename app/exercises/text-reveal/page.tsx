import { ExerciseDisplay } from "../../components/ExerciseDisplay";
import { TextReveal } from "./component";

export default function TextRevealPage() {
  return (
    <ExerciseDisplay
      title="Keyframes - Text Reveal"
      description="A text reveal animation using keyframes"
      courseUrl="https://animations.dev/learn/css-animations/keyframe-animations"
    >
      <TextReveal />
    </ExerciseDisplay>
  );
}
