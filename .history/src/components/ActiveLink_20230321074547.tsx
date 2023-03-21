import Link, {LinkProps} from "next/link";
import {ReactElement, cloneElement} from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({...rest}: ActiveLinkProps) {
  return (
    <Link {...rest}>

    </Link>
  )
}