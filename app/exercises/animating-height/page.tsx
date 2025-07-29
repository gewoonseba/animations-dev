import { ExerciseDetail } from "../../components/ExerciseDetail";
import { AnimatingHeightComponent } from "./component";

export default function AnimatingHeightPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/how-do-i-use-framer-motion/the-basics"
      description="A fake family drawer that demonstrates height animation with Framer Motion"
      title="Animating Height"
    >
      <AnimatingHeightComponent />
    </ExerciseDetail>
  );
}
