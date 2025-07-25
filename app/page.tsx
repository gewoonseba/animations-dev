import { ExerciseLink } from "@/app/components/ExerciseLink";
import { ExerciseSection } from "@/app/components/ExerciseSection";

export default function Home() {
  return (
    <div>
      <h1 className="mb-24 text-black text-sm">Animations.dev</h1>

      <ExerciseSection title="CSS Transforms">
        <ExerciseLink href="/exercises/stacked-cards" title="Stacked Cards" />
      </ExerciseSection>

      <ExerciseSection title="CSS Transitions">
        <ExerciseLink
          href="/exercises/hover-circle"
          key="hover-circle"
          title="Hover Circle"
        />
        <ExerciseLink
          href="/exercises/card-hover"
          key="card-hover"
          title="Card Hover"
        />
        <ExerciseLink
          href="/exercises/download-arrow"
          key="download-arrow"
          title="Download Arrow"
        />
        <ExerciseLink
          href="/exercises/toast-component"
          key="toast-component"
          title="Toast Component"
        />
        <ExerciseLink
          href="/exercises/toast-component-starting-styles"
          key="toast-component-starting-styles"
          title="Toast Component (With Starting Styles)"
        />
      </ExerciseSection>

      <ExerciseSection title="CSS Keyframes">
        <ExerciseLink
          href="/exercises/text-reveal"
          key="text-reveal"
          title="Text Reveal"
        />
        <ExerciseLink href="/exercises/orbit" key="orbit" title="Orbit" />
        <ExerciseLink
          href="/exercises/coin-spin"
          key="coin-spin"
          title="Coin Spin"
        />
      </ExerciseSection>

      <ExerciseSection title="Clip Path">
        <ExerciseLink
          href="/exercises/hold-to-delete"
          key="hold-to-delete"
          title="Hold to delete"
        />
        <ExerciseLink
          href="/exercises/tabs-transition"
          key="tabs-transition"
          title="Tabs Transition"
        />
      </ExerciseSection>
    </div>
  );
}
