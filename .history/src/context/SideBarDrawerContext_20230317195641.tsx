import { useDisclosure } from '@chakra-ui/react';
import { createContext } from 'react'

interface SideBarDrawerProviderProps{
  children: React.ReactNode;
}

const SideBarDrawerContext = createContext({})

export function SideBarDrawerProvider({children}: SideBarDrawerProviderProps){
  const disclosure = useDisclosure()

  return (
    <SideBarDrawerContext.Provider value={}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}