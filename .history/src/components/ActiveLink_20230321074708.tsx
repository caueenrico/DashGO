import Link, {LinkProps} from "next/link";
import {ReactElement, cloneElement} from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({children,...rest}: ActiveLinkProps) {
  const isActive = false;

  return (
    <Link {...rest}>
      {cloneElement(children, {color: 'pink.400'})}
    </Link>
  )
}