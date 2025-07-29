import { AppstoreListComponent } from "@/app/exercises/appstore-list/component";
import { ExerciseDetail } from "../../components/ExerciseDetail";

export default function AppstoreListPage() {
  return (
    <ExerciseDetail
      courseUrl="https://animations.dev/learn/how-do-i-use-framer-motion/how-do-i-code-animations#shared-layout-animations"
      description="A shared layout animation exercise demonstrating how to create smooth transitions between list items and detailed views using Framer Motion."
      title="App Store List"
    >
      <AppstoreListComponent />
    </ExerciseDetail>
  );
}
