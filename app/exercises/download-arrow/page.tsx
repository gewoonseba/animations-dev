import { DownloadArrowComponent } from "./component";
import { ExerciseDisplay } from "../ExerciseDisplay";

export default function DownloadArrowPage() {
  return (
    <ExerciseDisplay
      title="Transitions - Download Arrow"
      description="A download button with arrows that slide in and out on hover"
      courseUrl="https://animations.dev/learn/css-animations/transitions"
    >
      <DownloadArrowComponent />
    </ExerciseDisplay>
  );
}