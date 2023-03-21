import { createContext } from 'react'

interface SideBarDrawerProviderProps{
  children: React.ReactNode;
}

const SideBarDrawerContext = createContext({})

export function SideBarDrawerProvider({children}: SideBarDrawerProviderProps){
  return (
    <SideBarDrawerContext.Provider value={{}}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}