import Link from 'next/link';

interface ExerciseLinkProps {
  href: string;
  title: string;
}

export function ExerciseLink({ href, title }: ExerciseLinkProps) {
  return (
    <Link
      className="text-neutral-500 text-sm decoration-solid underline-offset-auto hover:underline"
      href={href}
    >
      {title}
    </Link>
  );
}
