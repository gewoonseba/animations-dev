interface ExerciseDisplayProps {
  title: string;
  description: string;
  courseUrl: string;
  children: React.ReactNode;
}

export function ExerciseDisplay({
  title,
  description,
  courseUrl,
  children,
}: ExerciseDisplayProps) {
  return (
    <>
      <h1 className="mt-8 mb-2 text-sm font-semibold text-neutral-900">
        {title}
      </h1>

      <p className="mb-4 text-sm text-neutral-600">{description}</p>

      <a
        href={courseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 no-underline hover:text-neutral-800 text-sm"
      >
        View course material →
      </a>

      <div className="mt-8 p-8 border border-neutral-100 rounded-lg flex justify-center items-center w-full h-96">
        {children}
      </div>
    </>
  );
}