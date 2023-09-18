import Anchor, { AnchorProps } from '../Atom/Anchor';
import Button, { ButtonProps } from '../Atom/Button';

interface BtnProps extends AnchorProps, ButtonProps {
  href?: string | object;
}

export default function Btn({ href, ...props }: BtnProps) {
  if (href) {
    return <Anchor href={href} {...props} />;
  }
  return <Button {...props} />;
}
