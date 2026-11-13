type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/** Shows a photo at most at its real pixel size. */
export default function HonestImage({ src, alt, width, height, className = "", priority = false }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`mx-auto block h-auto w-full ${className}`}
      style={{ maxWidth: width }}
    />
  );
}
