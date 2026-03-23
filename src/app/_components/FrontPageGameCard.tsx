type FrontPageGameCardProps = {
  href: string;
  imageUrl: string;
  label: string;
  description: string | readonly string[];
  /** Intro block: description only, not a link. Layout matches game cards. */
  featured?: boolean;
};

function descriptionParagraphs(
  description: string | readonly string[],
): readonly string[] {
  return typeof description === "string" ? [description] : description;
}

/** Shared layout; font-sans → Geist via --font-geist-sans (see globals.css + layout) */
const shellLayout =
  "font-sans antialiased flex min-w-0 flex-col items-center gap-5 py-7 text-center sm:flex-row sm:items-center sm:gap-10 sm:py-12 sm:text-left lg:gap-12 lg:py-14";

const thumbClass =
  "relative h-[10.5rem] w-[10.5rem] shrink-0 overflow-hidden rounded-xl bg-zinc-100 sm:h-52 sm:w-52 sm:rounded-lg lg:h-56 lg:w-56";

/** One scale + leading for every text line in the card */
const textBase =
  "text-xs leading-snug sm:text-sm sm:leading-snug lg:text-base lg:leading-relaxed";

export function FrontPageGameCard({
  href,
  imageUrl,
  label,
  description,
  featured = false,
}: FrontPageGameCardProps) {
  const paragraphs = descriptionParagraphs(description);

  const thumb = (
    <div className={thumbClass}>
      <img
        src={imageUrl}
        alt=""
        className={
          featured
            ? "h-full w-full object-cover object-center"
            : "h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        }
      />
    </div>
  );

  if (featured) {
    return (
      <div className={shellLayout}>
        {thumb}
        <div className="min-w-0 flex-1 sm:py-1">
          <h2
            className={`${textBase} font-semibold tracking-tight text-zinc-950`}
          >
            Plan
          </h2>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`${textBase} text-zinc-700 ${i === 0 ? "mt-2" : "mt-3 sm:mt-4"}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${shellLayout} rounded-xl outline-none transition-colors hover:bg-zinc-50/90 focus-visible:bg-zinc-50 sm:rounded-2xl`}
    >
      {thumb}
      <div className="min-w-0 w-full flex-1 sm:py-1">
        <p className={`${textBase} text-zinc-950 font-semibold`}>{label}</p>
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className={`${textBase} text-zinc-700 ${i === 0 ? "mt-2" : "mt-3 sm:mt-4"}`}
          >
            {para}
          </p>
        ))}
      </div>
    </a>
  );
}
