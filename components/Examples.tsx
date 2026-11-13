import { content, type Photo } from "@/content";
import ProjectGallery from "@/components/ProjectGallery";

export default function Examples({ photos, title, id }: { photos: Photo[]; title: string; id: string }) {
  const { ui } = content;
  return (
    <section className="border-t border-ink">
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <ProjectGallery
          groups={[{ id, title, photos }]}
          labels={{ enlarge: ui.enlarge, previous: ui.previous, next: ui.next, close: ui.close }}
        />
      </div>
    </section>
  );
}
