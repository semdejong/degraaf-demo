import HonestImage from "@/components/HonestImage";
import Waterline from "@/components/Waterline";

type Props = {
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  tone?: "lime" | "goud";
};

export default function PageIntro({ title, lede, image, imageAlt, imageWidth, imageHeight, tone = "lime" }: Props) {
  return (
    <header>
      <div className="mx-auto max-w-[72rem] px-5 pt-12 pb-8 md:px-8 md:pt-16">
        <h1 className="max-w-[16ch] font-display text-[clamp(2.7rem,7vw,5rem)] text-ink">{title}</h1>
        {lede ? <p className="mt-6 max-w-2xl text-[1.125rem] leading-[1.65]">{lede}</p> : null}
      </div>
      {image && imageAlt && imageWidth && imageHeight ? (
        <div className="mx-auto max-w-[80rem] px-5 md:px-8">
          <HonestImage src={image} alt={imageAlt} width={imageWidth} height={imageHeight} priority />
        </div>
      ) : null}
      <div className="mt-8">
        <Waterline tone={tone} />
      </div>
    </header>
  );
}
