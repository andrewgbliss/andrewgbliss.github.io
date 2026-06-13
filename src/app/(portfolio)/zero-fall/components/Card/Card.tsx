import { Card, CardContent } from "@/components/ui/card";
import Link from "../Buttons/Link";
import Video from "../YouTube/Video";

type Props = {
  src: string;
  title: string;
  href?: string;
  description: string;
  direction: string;
};

export default function CardStyled({
  src,
  title,
  href,
  description,
  direction,
}: Props) {
  return (
    <Card>
      <CardContent className="py-10">
        <div
          className={`flex justify-between ${
            direction === "right"
              ? "flex-col sm:flex-row"
              : "flex-col sm:flex-row-reverse"
          }`}
        >
          <div>
            <Video title={title} videoId={src} />
          </div>
          <div className="flex grow flex-col px-4 py-5 sm:py-0 gap-4">
            <h2 className="text-3xl">{title}</h2>
            <p className="text-lg">{description}</p>
            {href ? (
              <div className="">
                <Link href={href}>View</Link>
              </div>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
