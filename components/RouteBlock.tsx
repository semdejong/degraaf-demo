import { content } from "@/content";

export default function RouteBlock() {
  const { contact } = content;
  return (
    <div>
      <p>{contact.place}</p>
      <dl className="mt-6 flex flex-col gap-5">
        {contact.directions.map((direction) => (
          <div key={direction.from}>
            <dt className="font-mono text-[0.95rem]">{direction.from}</dt>
            <dd className="mt-1">{direction.text}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6">
        <a href={contact.maps} className="inline-link" rel="noopener noreferrer" target="_blank">
          {contact.mapsLabel}
        </a>
      </p>
    </div>
  );
}
