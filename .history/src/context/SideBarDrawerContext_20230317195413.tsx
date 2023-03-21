import { createContext } from 'react'

interface SideBarDrawerProviderProps{
  children: Reac
}

const SideBarDrawerContext = createContext({})

export function SideBarDrawerProvider(){
  return (
    <SideBarDrawerContext.Provider value={{}}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}