import type { Block } from "@/content";

export default function Blocks({ blocks, narrow = true }: { blocks: Block[]; narrow?: boolean }) {
  return (
    <div className={`flex flex-col gap-5 ${narrow ? "max-w-[42rem]" : ""}`}>
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="mt-6 font-display text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="peil-list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={index} className="border-l-[3px] border-lime py-1 pl-5 font-display text-[clamp(1.6rem,3vw,2.15rem)] leading-snug text-ink">
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "video") {
          return (
            <figure key={index} className="mt-2">
              <div className="relative aspect-video w-full border border-ink bg-ink">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${block.id}`}
                  title={block.title}
                  loading="lazy"
                  allow="fullscreen; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <figcaption className="mt-2 font-mono text-sm">{block.title}</figcaption>
            </figure>
          );
        }
        return (
          <p key={index} className="text-[1.125rem] leading-[1.65]">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
