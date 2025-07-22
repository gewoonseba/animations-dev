import Link from "next/link";

interface ExerciseLayoutProps {
  children: React.ReactNode;
}

export default function ExerciseLayout({ children }: ExerciseLayoutProps) {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-neutral-500 no-underline hover:text-neutral-800 text-sm"
      >
        ← Back to exercises
      </Link>
      
      {children}
    </div>
  );
}