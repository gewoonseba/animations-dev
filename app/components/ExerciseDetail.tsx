interface ExerciseDetailProps {
  title: string;
  description: string;
  courseUrl: string;
  children: React.ReactNode;
}

export function ExerciseDetail({
  title,
  description,
  courseUrl,
  children,
}: ExerciseDetailProps) {
  return (
    <>
      <h1 className="mt-8 mb-2 font-semibold text-neutral-900 text-sm">
        {title}
      </h1>

      <p className="mb-4 text-neutral-600 text-sm">{description}</p>

      <a
        className="text-neutral-500 text-sm no-underline hover:text-neutral-800"
        href={courseUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        View course material →
      </a>

      <div className="mt-8 flex h-96 w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-100 p-8">
        {children}
      </div>
    </>
  );
}
