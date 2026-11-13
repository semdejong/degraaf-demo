/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed bottom-[4.75rem] left-3 z-50 inline-flex min-h-11 items-center gap-2 border border-ink bg-paper px-3 py-1.5 text-xs font-medium text-ink lg:bottom-4"
    >
      <span className="inline-block h-[3px] w-3 bg-lime" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
