interface Props {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

export default function Link(props: Props) {
  const {
    href,
    target = '_blank',
    rel = 'noopener noreferrer',
    children,
    color = 'primary',
    onClick = () => {},
  } = props;
  const colorClassName =
    color === 'primary'
      ? 'bg-primary hover:bg-primary-light text-white'
      : 'bg-secondary hover:bg-secondary-light text-gray-600';
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={() => onClick()}
      className={`${colorClassName} font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline shadow-xl inline-block transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1`}
    >
      {children}
    </a>
  );
}
