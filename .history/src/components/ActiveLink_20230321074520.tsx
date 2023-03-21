import Link, {LinkProps} from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: 
}

export function ActiveLink({...rest}: ActiveLinkProps) {
  return (
    <Link {...rest}>

    </Link>
  )
}