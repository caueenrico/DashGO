import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

import { createContext } from 'react'

interface SideBarDrawerProviderProps{
  children: React.ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)

export function SideBarDrawerProvider({children}: SideBarDrawerProviderProps){
  const disclosure = useDisclosure()

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}