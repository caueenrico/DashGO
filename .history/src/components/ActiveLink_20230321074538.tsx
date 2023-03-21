import Link, {LinkProps} from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({...rest}: ActiveLinkProps) {
  return (
    <Link {...rest}>

    </Link>
  )
}