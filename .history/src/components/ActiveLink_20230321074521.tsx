import Link, {LinkProps} from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: R
}

export function ActiveLink({...rest}: ActiveLinkProps) {
  return (
    <Link {...rest}>

    </Link>
  )
}