import Link from 'next/link';

export interface AnchorProps {
  children?: React.ReactNode;
  href?: string | object;
  target?: string;
  className?: string;
}

export default function Anchor({
  children = '링크',
  href = '',
  target,
  className,
}: AnchorProps) {
  console.log(href);
  return (
    <Link href={href} target={target} className={className}>
      {children}
    </Link>
  );
}
