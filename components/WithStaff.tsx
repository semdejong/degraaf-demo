import Link from "next/link";
import type { ReactNode } from "react";
import { content } from "@/content";

/** Text pages keep a narrow column. The staff on the right shows the same four steps. */
export default function WithStaff({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid max-w-[76rem] items-start gap-x-16 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[minmax(0,42rem)_13.5rem]">
      <div className="min-w-0">{children}</div>
      <aside className="sticky top-28 hidden lg:block" aria-label="Het werk in vier stappen">
        <p className="font-mono text-[0.95rem]">Vier stappen</p>
        <ol className="mt-4 border-t border-ink">
          {content.rhythm.steps.map((step) => (
            <li key={step.code} className="border-b border-ink py-3">
              <div className="mb-2 h-1.5 bg-vlak" aria-hidden="true">
                <div className="h-full border-r-[3px] border-lime bg-teal" style={{ width: step.level }} />
              </div>
              <p className="font-mono text-[0.95rem]">{step.code}</p>
              <p className="font-display text-[1.7rem] leading-none">{step.title}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4">
          <Link href="/diensten" className="inline-link">
            Alle diensten
          </Link>
        </p>
      </aside>
    </div>
  );
}
