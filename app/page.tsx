import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-20 mt-16 max-w-screen-lg">
      <h1 className="text-sm text-black mb-24">Animations.dev</h1>

      <div className="mb-24">
        <h2 className="text-sm text-black mb-2">CSS Transitions</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <Link
              href="/exercises/hover-circle"
              className="text-sm text-neutral-500 hover:underline decoration-solid underline-offset-auto"
            >
              Transitions - Hover Circle
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/exercises/card-hover"
              className="text-sm text-neutral-500 hover:underline decoration-solid underline-offset-auto"
            >
              Transitions - Card Hover
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/exercises/download-arrow"
              className="text-sm text-neutral-500 hover:underline decoration-solid underline-offset-auto"
            >
              Transitions - Download Arrow
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/exercises/toast-component"
              className="text-sm text-neutral-500 hover:underline decoration-solid underline-offset-auto"
            >
              Transitions - Toast Component
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-24">
        <h2 className="text-sm text-black mb-2">CSS Transforms</h2>
        <ul className="list-none p-0">
          <li className="mb-1">
            <Link
              href="/exercises/stacked-cards"
              className="text-sm text-neutral-500 hover:underline decoration-solid underline-offset-auto"
            >
              Transforms - Stacked Cards
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
