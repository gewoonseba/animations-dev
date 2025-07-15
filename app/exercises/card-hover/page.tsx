import { CardHoverComponent } from "./component";

export default function CardHoverPage() {
  return (
    <>
      <h1 className="mt-8 mb-2 text-sm font-semibold text-neutral-900">
        Transitions - Card Hover
      </h1>

      <p className="mb-4 text-sm text-neutral-600">
        A card with a description that slides up on hover using smooth transitions
      </p>

      <a
        href="https://animations.dev/learn/css-animations/transitions"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 no-underline hover:text-neutral-800 text-sm"
      >
        View course material →
      </a>

      <div className="mt-8 p-8 border border-neutral-100 rounded-lg flex justify-center items-center w-full h-96">
        <CardHoverComponent />
      </div>
    </>
  );
}