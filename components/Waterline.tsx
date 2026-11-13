export default function Waterline({ tone = "lime" }: { tone?: "lime" | "goud" }) {
  return <div aria-hidden="true" className={tone === "goud" ? "waterline waterline-goud" : "waterline"} />;
}
