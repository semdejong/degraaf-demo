import { content } from "@/content";
import HonestImage from "@/components/HonestImage";

export default function Keurmerken() {
  return (
    <ul className="flex flex-wrap items-end gap-8">
      {content.keurmerken.map((mark) => (
        <li key={mark.name}>
          <a href={mark.href} className="inline-block" rel="noopener noreferrer" target="_blank">
            <HonestImage src={mark.src} alt={mark.label} width={mark.width} height={mark.height} className="!w-auto" />
            <span className="mt-2 block text-base text-link underline decoration-1 underline-offset-2">{mark.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
