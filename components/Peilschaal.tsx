import { content } from "@/content";

export default function Peilschaal({ axis = "vertical" }: { axis?: "vertical" | "horizontal" }) {
  const levels = content.peil;
  if (axis === "horizontal") {
    return (
      <ol aria-hidden="true" className="peil-h grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
        {levels.map((level) => (
          <li key={level.code} className="peil-label">
            {level.code} {level.label}
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ol aria-hidden="true" className="peil-v flex h-full flex-col justify-between">
      {levels.map((level) => (
        <li key={level.code} className="peil-label">
          {level.code} {level.label}
        </li>
      ))}
    </ol>
  );
}
