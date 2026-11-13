"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Photo } from "@/content";

type Group = {
  id: string;
  title: string;
  lede?: string;
  photos: Photo[];
};

export default function ProjectGallery({
  groups,
  labels,
}: {
  groups: Group[];
  labels: { enlarge: string; previous: string; next: string; close: string };
}) {
  const [current, setCurrent] = useState<{ group: number; index: number } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const active = current ? groups[current.group]?.photos[current.index] : null;
  const activeGroup = current ? groups[current.group] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (current && !dialog.open) dialog.showModal();
    if (!current && dialog.open) dialog.close();
  }, [current]);

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // step closes over current; rebinding on current is intended
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, groups]);

  function step(direction: number) {
    setCurrent((value) => {
      if (!value) return value;
      const photos = groups[value.group]?.photos ?? [];
      const next = value.index + direction;
      if (next < 0 || next >= photos.length) return value;
      return { group: value.group, index: next };
    });
  }

  function close() {
    setCurrent(null);
    lastTrigger.current?.focus();
  }

  return (
    <div className="flex flex-col gap-14">
      {groups.map((group, groupIndex) => (
        <section key={group.id} id={group.id} aria-labelledby={`groep-${group.id}`} className="scroll-mt-28">
          <h2 id={`groep-${group.id}`} className="font-display text-[clamp(1.8rem,3vw,2.6rem)]">
            {group.title}
          </h2>
          {group.lede ? <p className="mt-2 max-w-xl">{group.lede}</p> : null}
          <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {group.photos.map((item, index) => (
              <li key={item.src}>
                <button
                  type="button"
                  className="block w-full text-left"
                  aria-label={`${labels.enlarge}: ${item.caption}`}
                  onClick={(event) => {
                    lastTrigger.current = event.currentTarget;
                    setCurrent({ group: groupIndex, index });
                  }}
                >
                  <span className="flex h-56 items-center justify-center bg-vlak sm:h-64">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="max-h-full w-auto max-w-full object-contain"
                      style={{ maxWidth: item.width }}
                    />
                  </span>
                  <span className="mt-2 block font-mono text-[0.95rem]">{item.caption}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="m-auto flex max-h-[calc(100dvh-2rem)] w-[min(92vw,1100px)] max-w-full flex-col overflow-auto border border-ink bg-paper p-4 text-ink backdrop:bg-ink/70"
        onClose={close}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
      >
        {active && activeGroup ? (
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p id={titleId} className="font-mono text-[0.95rem]">
                {active.caption}
              </p>
              <button type="button" className="btn btn-line" onClick={close}>
                {labels.close}
              </button>
            </div>
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="mx-auto h-auto max-h-[62vh] w-auto max-w-full"
                style={{ maxWidth: active.width }}
              />
            </div>
            <div className="mt-3 flex gap-2 bg-paper">
              <button type="button" className="btn btn-line" onClick={() => step(-1)} disabled={current?.index === 0}>
                {labels.previous}
              </button>
              <button
                type="button"
                className="btn btn-line"
                onClick={() => step(1)}
                disabled={current ? current.index >= activeGroup.photos.length - 1 : true}
              >
                {labels.next}
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
