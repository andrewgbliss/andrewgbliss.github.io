import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function StyledLink(props: Props) {
  const { href, children } = props;
  return (
    <div className="my-4 mx-1">
      <Link legacyBehavior href={href}>
        <a className="p-2 border rounded-full text-white hover:bg-white hover:text-primary">
          {children}
        </a>
      </Link>
    </div>
  );
}
