import { ExerciseDetail } from "../../components/ExerciseDetail";
import { TabsTransitionComponent } from "./component";

export default function TabsTransitionPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/css-animations/the-magic-of-clip-path"
      description="A tab component with smooth transitions between different content panels"
      title="Tabs Transition"
    >
      <TabsTransitionComponent />
    </ExerciseDetail>
  );
}
