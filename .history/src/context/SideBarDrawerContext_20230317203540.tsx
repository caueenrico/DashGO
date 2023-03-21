import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { createContext, useContext, useEffect } from 'react'

interface SideBarDrawerProviderProps{
  children: React.ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)

export function SideBarDrawerProvider({children}: SideBarDrawerProviderProps){
  const disclosure = useDisclosure() //
  const router = useRouter()

  useEffect(() => { // close the sidebar when the user changes the page
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext)