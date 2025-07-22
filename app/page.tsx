import { ExerciseLink } from "@/app/components/ExerciseLink";

export default function Home() {
  return (
    <div>
      <h1 className="text-sm text-black mb-24">Animations.dev</h1>

      <section className="mb-12">
        <h2 className="text-sm text-black mb-2">CSS Transforms</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/stacked-cards"
              title="Transforms - Stacked Cards"
            />
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-sm text-black mb-2">CSS Transitions</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/hover-circle"
              title="Transitions - Hover Circle"
            />
          </li>
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/card-hover"
              title="Transitions - Card Hover"
            />
          </li>
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/download-arrow"
              title="Transitions - Download Arrow"
            />
          </li>
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/toast-component"
              title="Transitions - Toast Component"
            />
          </li>
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/toast-component-starting-styles"
              title="Transitions - Toast Component (With Starting Styles)"
            />
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-sm text-black mb-2">CSS Keyframes</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/text-reveal"
              title="Keyframes - Text Reveal"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
