import Link, {LinkProps} from "next/link";
import {ReactElement, cloneElement} from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({children,...rest}: ActiveLinkProps) {
  const isActive = true;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}

//aqui eu estou utilizando um elemento do proprio next, porem passei algumas coisas que eu queria
//