import React, { isValidElement } from "react";

interface ExerciseSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ExerciseSection({ title, children }: ExerciseSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-2 text-sm">{title}</h2>
      <ul className="list-none p-0">
        {React.Children.toArray(children)
          .filter(isValidElement)
          .map((child) => (
            <li className="mb-1" key={child.key}>
              {child}
            </li>
          ))}
      </ul>
    </section>
  );
}
