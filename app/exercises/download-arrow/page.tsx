import { ExerciseDisplay } from '../../components/ExerciseDisplay';
import { DownloadArrowComponent } from './component';

export default function DownloadArrowPage() {
  return (
    <ExerciseDisplay
      courseUrl="https://animations.dev/learn/css-animations/transitions"
      description="A download button with arrows that slide in and out on hover"
      title="Download Arrow"
    >
      <DownloadArrowComponent />
    </ExerciseDisplay>
  );
}
