import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export default function StyledLink(props: Props) {
  const { href, children, className = "p-2", target = "" } = props;
  return (
    <div className={className}>
      <Link legacyBehavior href={href}>
        <a className="hover:text-secondary" target={target}>
          {children}
        </a>
      </Link>
    </div>
  );
}
