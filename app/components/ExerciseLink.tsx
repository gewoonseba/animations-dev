import Link from "next/link";

interface ExerciseLinkProps {
  href: string;
  title: string;
}

export function ExerciseLink({ href, title }: ExerciseLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm text-neutral-500 hover:underline decoration-solid underline-offset-auto"
    >
      {title}
    </Link>
  );
}
