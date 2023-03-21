import Link, {LinkProps} from "next/link";

interface ActiveLinkProps extends LinkProps {
  children: <ReactElement></ReactElement>
}

export function ActiveLink({...rest}: ActiveLinkProps) {
  return (
    <Link {...rest}>

    </Link>
  )
}