import { ExerciseLink } from "@/app/components/ExerciseLink";
import { ExerciseSection } from "@/app/components/ExerciseSection";

export default function Home() {
  return (
    <div className="relative">
      {/* Top fade overlay */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-10 h-20 bg-gradient-to-b from-white to-transparent" />

      {/* Bottom fade overlay */}
      <div className="pointer-events-none fixed right-0 bottom-0 left-0 z-10 h-20 bg-gradient-to-t from-white to-transparent" />

      {/* Main content */}
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
        <ExerciseSection title="Motion">
          <ExerciseLink
            href="/exercises/login-button"
            key="login-button"
            title="Login Button"
          />
          <ExerciseLink
            href="/exercises/animating-height"
            key="animating-height"
            title="Animating Height"
          />
          <ExerciseLink
            href="/exercises/appstore-list"
            key="appstore-list"
            title="App Store List"
          />
        </ExerciseSection>
      </div>
    </div>
  );
}
