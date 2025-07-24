import { ExerciseLink } from "@/app/components/ExerciseLink";

export default function Home() {
  return (
    <div>
      <h1 className="mb-24 text-black text-sm">Animations.dev</h1>

      <section className="mb-12">
        <h2 className="mb-2 text-black text-sm">CSS Transforms</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/stacked-cards"
              title="Stacked Cards"
            />
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-black text-sm">CSS Transitions</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <ExerciseLink href="/exercises/hover-circle" title="Hover Circle" />
          </li>
          <li className="mb-1">
            <ExerciseLink href="/exercises/card-hover" title="Card Hover" />
          </li>
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/download-arrow"
              title="Download Arrow"
            />
          </li>
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/toast-component"
              title="Toast Component"
            />
          </li>
          <li className="mb-1">
            <ExerciseLink
              href="/exercises/toast-component-starting-styles"
              title="Toast Component (With Starting Styles)"
            />
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-black text-sm">CSS Keyframes</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <ExerciseLink href="/exercises/text-reveal" title="Text Reveal" />
          </li>
          <li className="mb-1">
            <ExerciseLink href="/exercises/orbit" title="Orbit" />
          </li>
          <li>
            <ExerciseLink href="/exercises/coin-spin" title="Coin Spin" />
          </li>
        </ul>
      </section>
    </div>
  );
}
