import Link from 'next/link';

interface ExerciseLayoutProps {
  children: React.ReactNode;
}

export default function ExerciseLayout({ children }: ExerciseLayoutProps) {
  return (
    <>
      <Link
        className="text-neutral-500 text-sm no-underline hover:text-neutral-800"
        href="/"
      >
        ← Back to exercises
      </Link>

      {children}
    </>
  );
}
