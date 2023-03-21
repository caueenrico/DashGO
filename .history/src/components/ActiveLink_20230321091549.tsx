import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import {ReactElement, cloneElement} from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean; 
}

export function ActiveLink({children, shouldMatchExactHref=false ,...rest}: ActiveLinkProps) {
  let isActive = false;

  const {asPath} = useRouter(); //pega a rota atual

  if(shouldMatchExactHref ||(asPath === rest.href || asPath === rest.as)){
    isActive = true;
  } 

  if(!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))){
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}

//aqui eu estou utilizando um elemento do proprio next, porem passei algumas coisas que eu queria
//com o children eu pego o elemento que eu quero passar para o link
//clone element, ele clona um elemento e passa algumas coisas para ele, no caso eu passei o color